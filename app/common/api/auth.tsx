import BaseAPI from "./base";
import { CancelToken } from "axios";

export default class AuthAPI extends BaseAPI {
  public static async signIn(email: string, password: string, cancelToken: CancelToken): Promise<User.ISignInResponse> {
    return (await this.post("/api/signin", { email, password }, { cancelToken })).data;
  }
}
