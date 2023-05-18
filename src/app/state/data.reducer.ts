import { createReducer, on } from "@ngrx/store";
import { initialState } from "./data.state";
import { addNewDSR, updateDSR } from "./data.action";

const _dataReducer = createReducer(
  initialState,

  on(updateDSR, (state, action) => {
    const newState = [...state];
    newState.splice(action.id - 1, 1, action.value);
    return newState;
  }),

  on(addNewDSR, (state,action ) => {

    return [...state,action];
  })
);
export function dataReducer(state: any, action: any) {
  return _dataReducer(state, action);
}
