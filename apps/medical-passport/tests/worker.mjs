import {parentPort,workerData as d} from 'node:worker_threads';import {Store} from '../store.mjs';
const s=new Store(d.file);parentPort.postMessage('ready');Atomics.wait(new Int32Array(d.start),0,0);let result;try{s.consume(d.user,d.token);result='ok';}catch(e){result=e.code??e.message;}s.close();parentPort.postMessage(result);
