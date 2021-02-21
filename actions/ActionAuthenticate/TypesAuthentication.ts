export const AUTHENTICATE_START = 'ActionAuthenticateStart';
export const AUTHENTICATE_SUCCESS = 'ActionAuthenticateSuccess';
export const AUTHENTICATE_FAIL = 'ActionAuthenticateFail';

export interface AuthState {
    user: {},
};

interface AuthenticationStartAction {
    type: typeof AUTHENTICATE_START,
    payload?: [],
};

interface AuthenticationSuccessAction {
    type: typeof AUTHENTICATE_SUCCESS,
    payload?: [],
};

interface AuthenticationFailAction {
    type: typeof AUTHENTICATE_FAIL,
    payload?: [],
};

export type AuthenticationActionTypes = AuthenticationStartAction | AuthenticationSuccessAction | AuthenticationFailAction;
