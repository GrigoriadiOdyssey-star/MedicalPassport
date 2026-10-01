import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';

const ui=fs.readFileSync(new URL('../public/master27-ui.js',import.meta.url),'utf8').replace('export function createMaster27UI','function createMaster27UI');
const css=fs.readFileSync(new URL('../public/app.css',import.meta.url),'utf8');
const result={id:'result-1',test_id:'lab-creat',local_code:'CREAT',test_name:'Creatinine',status:'CORRECTED',current:{version:2,status:'CORRECTED',value:82,unit:'umol/L',source_flag:'NORMAL',epistemic_state:'MEASURED',flag_origin:'SOURCE_PROVIDED',source:'SYNTHETIC_LIS',issued_at:1,reference_range_snapshot:{}},versions:[{version:2,status:'CORRECTED',value:82,unit:'umol/L',source_flag:'NORMAL',issued_at:1,correction_reason:'synthetic correction'},{version:1,status:'FINAL',value:80,unit:'umol/L',source_flag:'NORMAL',issued_at:0}]};
async function setup(t,hash='#/laboratory?tab=overview',language='ru'){
  const dom=new JSDOM('<html><head><link rel="stylesheet" href="/app.css"></head><body><aside class="sidebar"><nav class="nav"><a href="#/pharmacy">Pharmacy</a></nav></aside><header class="topbar-title"></header><main id="main"></main></body></html>',{url:'http://localhost/'+hash,runScripts:'outside-only'});
  const w=dom.window;w.document.documentElement.lang=language;const calls=[];
  w.fetch=async url=>{const path=String(url).replace('/api','').split('?')[0];calls.push(String(url));let value=[];
    if(path==='/mvp/laboratory/provider-boundary')value={status:'INTERFACE_ONLY'};
    else if(path==='/mvp/laboratory/results')value=[result];
    else if(path==='/mvp/laboratory/orders')value=[{id:'order-1',status:'FINAL',tests:[{test_name:'Creatinine'}],specimens:[]}];
    else if(path==='/mvp/laboratory/reports')value=[{id:'report-1',current:{version:1,status:'FINAL',title:'Diagnostic report',report_text:'Synthetic report',issued_at:1,provenance:{synthetic:true}}}];
    else if(path==='/mvp/laboratory/notifications')value=[{id:'notice-1',result_id:'result-1',result_version:2,status:'SYNTHETIC_NOTIFICATION',created_at:1,source:'synthetic'}];
    else if(path==='/mvp/laboratory/providers')value=[{display_name:'Synthetic laboratory',verification_state:'SYNTHETIC',address:'',country:'GB',source:'synthetic'}];
    else if(path==='/mvp/laboratory/catalogue')value=[{test_id:'lab-creat',test_name:'Creatinine',local_code:'CREAT',category:'chemistry',specimen_type:'serum',default_unit:'umol/L',terminology_state:'SYNTHETIC'}];
    else if(path==='/mvp/laboratory/specialized-boundaries')value={pathology:{status:'SYNTHETIC_ADAPTER',fields:[]}};
    else if(['/mvp/laboratory/pathology','/mvp/laboratory/microbiology','/mvp/laboratory/molecular-genetics','/mvp/laboratory/poct'].includes(path)){const domain=path.split('/').at(-1);value=[{domain,current:{version:2,status:'FINAL',source:'synthetic:specialty',verification_state:'SYNTHETIC',provenance:{adapter:'synthetic'},payload:{title:'Factual specialty record',autonomous_diagnosis:false}},attachments:[{name:'source.txt',relation:'SOURCE_REPORT',version:2,document_source:'synthetic'}]}];}
    else if(path.startsWith('/mvp/laboratory/trends/'))value={compatibility:'NOT_COMPARABLE',series:[],excluded:[]};
    else if(path==='/mvp/laboratory/results/result-1')value=result;
    else if(path==='/mvp/laboratory/results/result-1/attachments')value=[];
    return{ok:true,status:200,json:async()=>value};
  };
  w.eval(ui);t.after(()=>w.close());
  async function wait(){for(let n=0;n<100;n++){if(w.document.querySelector('.laboratory-tabs'))return;await new Promise(r=>setTimeout(r,5));}assert.fail('laboratory UI did not render');}
  await wait();return{w,calls};
}
test('MASTER-27 UI renders all routes, labels synthetic records and preserves version history in RU and EN',async t=>{
  for(const language of ['ru','en']){
    const{w}=await setup(t,'#/laboratory?tab=overview',language);
    const tabs=['overview','orders','results','reports','trends','notifications','providers','specialties','result'];
    for(const tab of tabs){
      w.location.hash=tab==='result'?'#/laboratory?tab=result&id=result-1':'#/laboratory?tab='+tab;
      await new Promise(r=>setTimeout(r,80));
      assert.ok(w.document.querySelector('.laboratory-tabs'),tab);
      assert.ok(w.document.querySelector('.chip.synthetic'));
      if(tab==='result'){assert.match(w.document.querySelector('#main').textContent,/v1/);assert.match(w.document.querySelector('#main').textContent,/v2/);}
      if(tab==='results')assert.ok(w.document.querySelector('#lab-filter-form'));
      if(tab==='specialties'){assert.match(w.document.querySelector('#main').textContent,/Factual specialty record/);assert.match(w.document.querySelector('#main').textContent,/SYNTHETIC/);assert.match(w.document.querySelector('#main').textContent,/source.txt/);assert.equal(w.document.querySelectorAll('form').length,0);}
    }
    assert.equal(w.document.querySelector('h1')?.textContent,language==='ru'?'Лаборатория':'Laboratory');
    assert.ok(w.document.querySelector('[data-master27-lab-nav]'));
  }
});
test('laboratory UI adds no inline style elements and remains responsive under the existing CSP',async t=>{
  const{w}=await setup(t);
  assert.equal(w.document.querySelectorAll('style').length,0);
  assert.match(css,/\.lab-status-grid/);
  assert.match(css,/@media\s*\(max-width:\s*900px\)/);
  assert.doesNotMatch(css,/style-src[^\n]*unsafe-inline/i);
  assert.ok(w.document.querySelector('link[rel="stylesheet"][href="/app.css"]'));
  assert.ok(w.document.querySelector('.sidebar .nav a[href="#/pharmacy"]'));
});
