import { schema } from "normalizr";

export interface INormalizedData
  extends Readonly<{
      users: User.INormalizedList;
    }> {}

export const UserEntitySchema = new schema.Entity("users", undefined, { idAttribute: "uid" });
export const UserListEntitySchema = new schema.Array(UserEntitySchema);
