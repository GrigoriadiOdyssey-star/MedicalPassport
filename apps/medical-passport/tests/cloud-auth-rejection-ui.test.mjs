import test from "node:test";
import assert from "node:assert/strict";
import {errorMessage} from "../public/ui.js";

test("Supabase credential rejection has safe actionable Russian and English UI text",()=>{
 const ru=errorMessage("AUTHENTICATION_FAILED","ru");
 const en=errorMessage("AUTHENTICATION_FAILED","en");
 assert.equal(ru,"Не удалось войти. Проверьте email и пароль или восстановите доступ.");
 assert.equal(en,"Unable to sign in. Check your email and password or recover access.");
 assert.notEqual(ru,errorMessage("UNEXPECTED_PROVIDER_ERROR","ru"));
 for(const message of [ru,en]){
  assert.doesNotMatch(message,/AUTHENTICATION_FAILED|invalid_credentials|registered|exists|not found|зарегистрирован|существует|не найден/i);
 }
});
test("credential rejection stays distinct from session expiry and backend failures",()=>{
 assert.notEqual(errorMessage("AUTHENTICATION_FAILED","ru"),errorMessage("UNAUTHENTICATED","ru"));
 assert.match(errorMessage("CLOUD_BACKEND_UNAVAILABLE","ru"),/CLOUD_BACKEND_UNAVAILABLE/);
 assert.doesNotMatch(errorMessage("AUTHENTICATION_FAILED","ru"),/CLOUD_|503|сервис/i);
});
