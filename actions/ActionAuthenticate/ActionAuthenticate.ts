import axios from 'axios';
import { 
    AUTHENTICATE_START, 
    AUTHENTICATE_SUCCESS,
    AUTHENTICATE_FAIL,
} from './TypesAuthentication'
import { AppDispatch } from '../../redux';

const AUTHENTICATE_URI = 'auth/login';

export const actionAuthenticate = async(dispatch: AppDispatch, email: String, password: String) => {
  dispatch({ type: AUTHENTICATE_START });

  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_NODE_API_URI}${AUTHENTICATE_URI}`,
      {
        emailAddress: email,
        password,
      }
    );

    dispatch({ type: AUTHENTICATE_SUCCESS });
    localStorage.setItem('token', data.token);
  }
  catch (error) {
    dispatch({ type: AUTHENTICATE_FAIL });
  }
};
