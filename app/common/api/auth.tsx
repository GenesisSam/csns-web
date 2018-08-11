import BaseAPI from "./base";
import { CancelToken } from "axios";
import { normalize } from "normalizr";
import { userEntity } from "common/models/normalized";

export default class AuthAPI extends BaseAPI {
  public static async signIn(email: string, password: string, cancelToken: CancelToken) {
    const result = await this.post("/api/signin", { email, password }, { cancelToken });
    // TODO: need token manage
    return normalize(result.data.data, userEntity);
  }
}
