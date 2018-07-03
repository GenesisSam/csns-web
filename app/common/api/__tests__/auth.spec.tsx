jest.setTimeout(50000);
import Axios from "axios";
import * as nock from "nock";
const httpAdapter = require("axios/lib/adapters/http");
import AuthAPI from "common/api/auth";
AuthAPI.getAxios().defaults.adapter = httpAdapter;

import { RAW } from "app/__mocks__";

describe.skip("AuthAPI", () => {
  let scope: nock.Scope;

  describe("signIn", () => {
    it("should return token with user data", async () => {
      scope = nock("http://devgen.iptime.org:3000")
        .post("/api/signin", {
          email: "test@test.com",
          password: "123123",
        })
        .reply(200, () => {
          console.log("!@#!@#");
          return RAW.SIGN_IN_RESPONSE;
        });
      const result = await AuthAPI.signIn("test@test.com", "123123", Axios.CancelToken.source().token);
      expect(scope.isDone()).toBeTruthy();
      expect(result).toBe(RAW.SIGN_IN_RESPONSE);
    });
  });
});
