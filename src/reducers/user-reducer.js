import types from '../actions/types';


const DEFAULT_STATE ={
    auth: false,
    error: null
}


export default (state=DEFAULT_STATE, action)=>{
    switch (action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true, error: '' };
        case types.SIGN_OUT:
            return { auth: false, error: '' }
        case types.ERROR:
            return { auth: false, error: action.payload}
        default:
            return  state;
    }
}
