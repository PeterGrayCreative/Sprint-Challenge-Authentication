import * as actionTypes from '../actions/actions';

const initialState = {
  error: false,
  users: [],
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
export default (state = initialState, action) => {
  console.log(`The reducer ran ${action.type}`);
  switch (action.type) {
    case actionTypes.REGISTER_USER:
      return { ...state, registerUser: true, };
    default:
    return state;
  }
}
