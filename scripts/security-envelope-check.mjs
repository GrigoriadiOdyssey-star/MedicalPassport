// Deliberately bounded keyword checker for the current contract, not a general JSON Schema engine.
const supported=new Set(['$schema','$id','title','type','oneOf','const','enum','required','properties','additionalProperties','minLength','maxLength','pattern','minimum','maximum']);
export function assertSupportedSchema(schema){for(const key of Object.keys(schema))if(!supported.has(key))throw Error('UNSUPPORTED_SCHEMA_KEYWORD '+key);if(schema.oneOf)for(const s of schema.oneOf)assertSupportedSchema(s);if(schema.properties)for(const s of Object.values(schema.properties))assertSupportedSchema(s);}
function matches(s,value){
 if(s.oneOf&&s.oneOf.filter(branch=>matches(branch,value)).length!==1)return false;
 if('const'in s&&JSON.stringify(value)!==JSON.stringify(s.const))return false;
 if(s.enum&&!s.enum.some(v=>JSON.stringify(v)===JSON.stringify(value)))return false;
 if(s.type){const types=Array.isArray(s.type)?s.type:[s.type];const has=t=>t==='null'?value===null:t==='object'?value!==null&&typeof value==='object'&&!Array.isArray(value):t==='integer'?Number.isSafeInteger(value):t==='string'?typeof value==='string':false;if(!types.some(has))return false;}
 if(typeof value==='string'){if(s.minLength!==undefined&&value.length<s.minLength||s.maxLength!==undefined&&value.length>s.maxLength)return false;if(s.pattern&&!new RegExp(s.pattern).test(value))return false;}
 if(typeof value==='number'&&(!Number.isFinite(value)||s.minimum!==undefined&&value<s.minimum||s.maximum!==undefined&&value>s.maximum))return false;
 if(value!==null&&typeof value==='object'&&!Array.isArray(value)){if(s.required?.some(k=>!Object.hasOwn(value,k)))return false;if(s.additionalProperties===false&&Object.keys(value).some(k=>!Object.hasOwn(s.properties??{},k)))return false;for(const [k,sub]of Object.entries(s.properties??{}))if(Object.hasOwn(value,k)&&!matches(sub,value[k]))return false;}
 return true;
}
export function checkEnvelope(schema,value){assertSupportedSchema(schema);return matches(schema,value);}
