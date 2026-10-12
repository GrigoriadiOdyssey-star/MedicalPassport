import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { createAlpha4UI } from "../public/alpha4-ui.js";
import { errorMessage, escape } from "../public/ui.js";
import { translate } from "../public/i18n.js";

for (const locale of ["ru", "en"]) {
  for (const fixture of [
    {name:"EDHT-TEST.unsupported",size:61,code:"UNSUPPORTED_FILE_TYPE",message:locale==="ru"?/формат файла не поддерживается/:/file format is not supported/},
    {name:"EDHT-TEST-oversize.txt",size:4194305,code:"FILE_TOO_LARGE",message:locale==="ru"?/Размер файла превышает/:/file exceeds/},
  ]) {
    test(locale+": "+fixture.code+" rejects before upload and has an actionable safe message", async () => {
      const dom=new JSDOM('<div id="modal"></div>',{url:"https://preview.example.test/#/documents"});
      const calls=[];
      const ui=createAlpha4UI({
        document:dom.window.document,window:dom.window,e:escape,t:key=>translate(key,locale),
        get:()=>({locale,me:{role:"patient"},screen:"documents"}),
        modal:(_title,html)=>{dom.window.document.querySelector("#modal").innerHTML=html;},
        load:async()=>{},notice:()=>{},csrf:()=>"synthetic-csrf",
        api:async path=>{
          calls.push(path);
          assert.equal(path,"/storage-policy","invalid files must never create upload sessions");
          return {documentBytes:4194304};
        },
      });
      try {
        await ui.uploadModal("document");
        const form=dom.window.document.querySelector("form");
        // Metadata-only test file: accessing bytes would mean validation ran too late.
        const file={name:fixture.name,size:fixture.size,slice(){assert.fail("invalid file bytes must not be read");}};
        Object.defineProperty(form.elements.files,"files",{value:[file]});
        await assert.rejects(ui.submit(form,{title:"EDHT TEST"}),error=>{
          assert.equal(error.message,fixture.code);
          const message=errorMessage(error.message,locale);
          assert.match(message,fixture.message);
          assert.notEqual(message,errorMessage("SERVER",locale));
          assert.doesNotMatch(message,/UNSUPPORTED_FILE_TYPE|FILE_TOO_LARGE/);
          return true;
        });
        assert.deepEqual(calls,["/storage-policy"]);
        assert.equal(form.dataset.resume,"");
      } finally {dom.window.close();}
    });
  }
}
test("upload validation messages never replace backend/auth/integrity failures",()=>{
  for(const code of ["CLOUD_UPLOAD_FAILED","AUTHENTICATION_FAILED","UPLOAD_INTEGRITY_MISMATCH"]) {
    for(const locale of ["ru","en"]) {
      assert.notEqual(errorMessage(code,locale),errorMessage("FILE_TOO_LARGE",locale));
      assert.notEqual(errorMessage(code,locale),errorMessage("UNSUPPORTED_FILE_TYPE",locale));
    }
  }
});
