import { USER_REGISTER_SUCCESS, UserState } from '../../actions/ActionUser';
import { RootActionType } from '../../reducers';

const initialState: UserState = {
    user: {}
};

const ReducerUser = (state = initialState, action: RootActionType) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      if (!action.data) return state;
      return action.data;
    default:
      return state;
  }
};

export default ReducerUser;
