import { createFeatureSelector, createSelector } from "@ngrx/store";

export const getDSR = "Data";
const getDSRState = createFeatureSelector<any>(getDSR);
export const getCompleteDSR = createSelector(getDSRState,(state)=>{
    return state;
});
