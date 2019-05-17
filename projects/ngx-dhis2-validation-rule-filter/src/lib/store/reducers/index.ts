import * as fromReducer from '../reducers/validation-rule-groups.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ApplicationState {
    validationRuleGroups: fromReducer.ValidationRuleGroupState,
}

export const reducers: ActionReducerMap<ApplicationState> = {
    validationRuleGroups : fromReducer.reducer,
}; 

export const getApplicationState = createFeatureSelector<ApplicationState>(
    'validationRuleGroups'
);

// Validation rule state
export const getValidationRuleGroupState = createSelector(
    getApplicationState, 
    (state: ApplicationState) => state.validationRuleGroups
);


export const getValidationRuleGroupsEntities = createSelector(getValidationRuleGroupState, fromReducer.getValidationRuleGroupsEntities);

export const getAllValidationRuleGroups = createSelector(
    getValidationRuleGroupsEntities,
    (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
);

export const getValidationRuleGroupsLoaded = createSelector(getValidationRuleGroupState, fromReducer.getValidationRuleGroupLoaded);
export const getValidationRuleGroupsLoading = createSelector(getValidationRuleGroupState, fromReducer.getValidationRuleGroupLoading);

