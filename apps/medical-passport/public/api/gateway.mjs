import handler from "./[...route].mjs";
// Vercel rewrites all /api depths to one serverless entrypoint. Auth still runs in handler.
export default async function gateway(req,res) {
 const url=new URL(req.url,"https://"+(req.headers.host||"invalid"));
 const routes=url.searchParams.getAll("__edht_route");
 if(routes.length===1){
  const path=routes[0];
  if(!/^[a-zA-Z0-9_/-]+$/.test(path)||path.includes("//")) {
   res.statusCode=400;res.setHeader("Cache-Control","no-store, private");res.setHeader("Content-Type","application/json");res.end('{"error":"INVALID_ROUTE"}');return;
  }
  url.pathname="/api/"+path;url.searchParams.delete("__edht_route");req.url=url.pathname+url.search;
 }
 return handler(req,res);
}
