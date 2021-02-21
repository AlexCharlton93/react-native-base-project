import { AUTHENTICATE_START, AuthState, AuthenticationActionTypes} from '../../actions/ActionAuthenticate';
import { RootActionType } from '../../reducers';

const initialState: AuthState = {
    user: {}
};

const ReducerAuth = (state = initialState, action: RootActionType) => {
  switch (action.type) {
    case AUTHENTICATE_START:
      if (!action.data) return state;
      return action.data;
    default:
      return state;
  }
};

export default ReducerAuth;
