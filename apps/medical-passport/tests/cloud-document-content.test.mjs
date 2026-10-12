import test from "node:test";
import assert from "node:assert/strict";
import {createHash} from "node:crypto";
import {DOCUMENT_MAX_BYTES,validateDocumentContent,verifyDocumentObject} from "../public/api/_lib/cloud-document-content.mjs";
import {documentRoute} from "../public/api/_lib/cloud-documents.mjs";
const A="80000000-0000-4000-8000-000000000001";
const metadata=(bytes,mime)=>({size:bytes.byteLength,mime,sha256:createHash("sha256").update(bytes).digest("hex")});
test("cloud signature and UTF-8 checks match canonical ingestion",()=>{
 for(const[mime,bytes]of[
 ["application/pdf",Buffer.from("%PDF-1.7\n")],
 ["image/png",Buffer.from([137,80,78,71,13,10,26,10,0])],
 ["image/jpeg",Buffer.from([255,216,255,224,0])],
 ["text/plain",Buffer.from("Синтетический документ")],
 ["text/csv",Buffer.from("name,value\na,1")],
 ["application/json",Buffer.from('{"synthetic":true}')],
 ])assert.equal(validateDocumentContent(bytes,mime),true);
 for(const mime of["application/pdf","image/png","image/jpeg"])assert.throws(()=>validateDocumentContent(Buffer.from("synthetic text"),mime),{message:"CONTENT_SIGNATURE_MISMATCH"});
 for(const bytes of[Buffer.from([0]),Buffer.from([0xc3])])assert.throws(()=>validateDocumentContent(bytes,"text/plain"),{message:"INVALID_TEXT_FILE"});
 assert.throws(()=>validateDocumentContent(Buffer.from("x"),"text/html"),{message:"UNSUPPORTED_FILE_TYPE"});
});
test("completion verifies bytes before format and never trusts checksum",async()=>{
 const bytes=Buffer.from("abc");
 await assert.rejects(verifyDocumentObject(new Response(bytes),{size:3,sha256:"a".repeat(64),mime:"text/plain"}),{message:"UPLOAD_INTEGRITY_MISMATCH"});
 await assert.rejects(verifyDocumentObject(new Response(bytes),metadata(bytes,"image/png")),{message:"CONTENT_SIGNATURE_MISMATCH"});
 assert.deepEqual(await verifyDocumentObject(new Response(bytes),metadata(bytes,"text/plain")),bytes);
});
test("oversized and broken provider streams fail closed",async()=>{
 await assert.rejects(verifyDocumentObject(new Response(Buffer.alloc(DOCUMENT_MAX_BYTES+1)),{size:3,sha256:"a".repeat(64),mime:"text/plain"}),{message:"FILE_TOO_LARGE"});
 const broken=new ReadableStream({start(controller){controller.error(Error("provider-private-details"))}});
 await assert.rejects(verifyDocumentObject(new Response(broken),{size:3,sha256:"a".repeat(64),mime:"text/plain"}),{message:"CLOUD_BACKEND_UNAVAILABLE"});
});
test("request distinguishes malformed MIME400 from unsupported MIME415",async()=>{
 let calls=0;const cloud={rpc:async()=>{calls++;assert.fail("invalid MIME must not reserve storage")}};
 const payload={kind:"document",name:"EDHT-TEST.txt",size:3,sha256:"a".repeat(64)};
 for(const mime of[undefined,null,0,{},[],""," "])await assert.rejects(documentRoute({cloud,user:{id:A},method:"POST",path:"/api/uploads",payload:{...payload,mime}}),e=>e.status===400&&e.message==="INVALID_UPLOAD");
 await assert.rejects(documentRoute({cloud,user:{id:A},method:"POST",path:"/api/uploads",payload:{...payload,mime:"text/html"}}),e=>e.status===415&&e.message==="UNSUPPORTED_FILE_TYPE");assert.equal(calls,0);
});
test("matching-checksum text disguised as PNG never reaches finish RPC",async()=>{
 const bytes=Buffer.from("synthetic text");let finishes=0;
 const cloud={base:new URL("https://synthetic.supabase.co"),key:"sb_publishable_synthetic",token:"synthetic-session",rows:async()=>[{id:A,document_id:A,version:1,status:"OPEN",expires_at:new Date(Date.now()+3600000).toISOString(),...metadata(bytes,"image/png")}],fetch:async(_url,options)=>{assert.equal(options.redirect,"error");return new Response(bytes);},rpc:async()=>{finishes++;assert.fail("invalid content must not finish")}};
 await assert.rejects(documentRoute({cloud,user:{id:A},method:"POST",path:"/api/uploads/"+A+"/complete",payload:{}}),e=>e.status===415&&e.message==="CONTENT_SIGNATURE_MISMATCH");assert.equal(finishes,0);
});
