import { CancelToken } from "axios";
import { RAW } from "app/__mocks__";

export default class AuthAPI {
  public static async signIn(email: string, password: string, cancelToken: CancelToken) {
    if (email === "forceError") {
      return Promise.reject({ data: { error: "Force error" } });
    } else {
      return Promise.resolve(RAW.SIGN_IN_RESPONSE);
    }
  }
}
