import { schema } from "normalizr";

export interface INormalizedData
  extends Readonly<{
      users: User.INormalizedList;
    }> {}

export const userEntity = new schema.Entity("users", undefined, { idAttribute: "uid" });
export const userListEntity = new schema.Array(userEntity);
