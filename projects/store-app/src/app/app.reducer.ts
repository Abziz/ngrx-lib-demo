import { createReducer, on } from "@ngrx/store";
import { operate } from "./app.actions";

export const testReducer = createReducer(0,
  on(operate, state => state + 1),
);
