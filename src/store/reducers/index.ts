import { createSelector , ActionReducerMap  } from '@ngrx/store';
import * as User from './user.reducer';


export interface AppState {
    user: User.State
}

export const selectUserState = (state: AppState) => state.user;


export const selectUser = createSelector(selectUserState, state => state.user);
export const selectUserError = createSelector(selectUserState, state => state.error);
export const selectUserPending = createSelector(selectUserState, state => state.pending);

export const reducer : ActionReducerMap<AppState> = {
    user: User.reducer
}