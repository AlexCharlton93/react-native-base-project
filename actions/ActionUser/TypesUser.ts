export const USER_REGISTER_START = 'ActionUserStart';
export const USER_REGISTER_SUCCESS = 'ActionUserSuccess';
export const USER_REGISTER__FAIL = 'ActionUserFail';

export interface UserState {
    user: {},
};

interface UserStartAction {
    type: typeof USER_REGISTER_START,
    payload?: [],
};

interface UserSuccessAction {
    type: typeof USER_REGISTER_SUCCESS,
    payload?: [],
};

interface UserFailAction {
    type: typeof USER_REGISTER__FAIL,
    payload?: [],
};

export type UserActionTypes = UserStartAction | UserSuccessAction | UserFailAction;
