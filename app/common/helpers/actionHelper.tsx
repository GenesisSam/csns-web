import { ActionCreatorsMapObject } from "redux";

export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;
