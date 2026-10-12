import {createHash} from 'node:crypto';
export const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
const keys=['owner','kind','contract_id','major','sha256','previous_sha256'];
const valid=(r,owners)=>r&&typeof r==='object'&&!Array.isArray(r)&&Object.keys(r).length===keys.length&&keys.every(k=>Object.hasOwn(r,k))&&owners.includes(r.owner)&&['API','EVENT','DATA'].includes(r.kind)&&typeof r.contract_id==='string'&&/^[a-z][a-z0-9_-]{0,79}$/.test(r.contract_id)&&Number.isSafeInteger(r.major)&&r.major>=1&&typeof r.sha256==='string'&&/^[a-f0-9]{64}$/.test(r.sha256)&&(r.previous_sha256===null||typeof r.previous_sha256==='string'&&/^[a-f0-9]{64}$/.test(r.previous_sha256));
const identity=r=>[r.owner,r.kind,r.contract_id].join('|');
// Design-time immutable contract release checker. It does not approve deployment or clinical use.
export function assessRelease(history,candidate,bytes,owners){
 if(!Array.isArray(history)||!valid(candidate,owners)||!(typeof bytes==='string'||Buffer.isBuffer(bytes))||candidate.sha256!==digest(bytes))return {status:'REJECTED',reason:'INVALID_PACKAGE'};
 const groups=new Map();for(const r of history){if(!valid(r,owners))return {status:'REJECTED',reason:'INVALID_HISTORY'};const k=identity(r);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(r);}
 for(const group of groups.values()){group.sort((a,b)=>a.major-b.major);for(let i=0;i<group.length;i++)if(group[i].major!==i+1||group[i].previous_sha256!==(i?group[i-1].sha256:null))return {status:'REJECTED',reason:'BROKEN_HISTORY'};}
 const versions=groups.get(identity(candidate))??[],same=versions.find(r=>r.major===candidate.major);
 if(same)return {status:keys.every(k=>same[k]===candidate[k])?'UNCHANGED':'REJECTED',reason:'PUBLISHED_IDENTITY_IMMUTABLE'};
 const prior=versions.at(-1);if(candidate.major!==(prior?prior.major+1:1)||candidate.previous_sha256!==(prior?.sha256??null))return {status:'REJECTED',reason:'PREDECESSOR_MISMATCH'};
 return {status:'DESIGN_PACKAGE_ACCEPTED',production_release:false,runtime_compatibility_proven:false};
}
