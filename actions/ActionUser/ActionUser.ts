import axios from 'axios';
import { 
    USER_REGISTER_START, 
    USER_REGISTER_SUCCESS,
    USER_REGISTER__FAIL,
} from './TypesUser'
import { AppDispatch } from '../../redux';

const USER_URI = 'user';

export const actionUserRegister = async(dispatch: AppDispatch, email: String, password: String, confirmPassword: String) => {
  dispatch({ type: USER_REGISTER_START });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_NODE_API_URI}${USER_URI}`,
      {
        emailAddress: email,
        password,
        confirmPassword,
      }
    );

    dispatch({
      payload: data,
      type: USER_REGISTER_SUCCESS 
    });
  }
  catch (error) {
    dispatch({ type: USER_REGISTER__FAIL });
  }
};
