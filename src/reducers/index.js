import {combineReducers} from 'redux';
import  { reducer as formReducer} from 'redux-form';
import userReducer from './user-reducer';


export default combineReducers({
    user: userReducer,
    form: formReducer
});
