import { CommonDataTypes } from "./types";
import { ActionUnion } from "common/helpers/actionHelper";
import { INormalizedData } from "common/models/normalized";

function createAction<T extends { type: CommonDataTypes }>(d: T): T {
  return d;
}

export const ActionCreators = {
  addEntities: (entities: Partial<INormalizedData>) =>
    createAction({
      type: CommonDataTypes.ADD_ENTITIES,
      payload: entities,
    }),
};
export type Actions = ActionUnion<typeof ActionCreators>;
