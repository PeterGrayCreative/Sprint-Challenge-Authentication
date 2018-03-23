import axios from 'axios';

axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000';

export const USER_REGISTERED = 'USER_REGISTERED';
export const REGISTRATION_FAILED = 'REGISTRATION_FAILED';
export const REGISTER_USER = 'REGISTER_USER';


export const register = (username, password, confirmPassword, history) => {
  return (dispatch) => {
    if (password !== confirmPassword) {
      dispatch({ type: REGISTRATION_FAILED, payload: {error: "Wrong Password."} });
      return;
    }
    axios
      .post(`${ROOT_URL}/api/users`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED,
        });
        history.push('/signin');
      })
      .catch(() => {
        dispatch();
      });
  };
};