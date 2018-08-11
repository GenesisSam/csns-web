import { denormalize } from "normalizr";
import { UserEntitySchema, INormalizedData } from "common/models/normalized";

export default function currentUserDenomalizer(data: Id, entity: INormalizedData): User.IUser | null | undefined {
  return denormalize(data, UserEntitySchema, entity);
}
