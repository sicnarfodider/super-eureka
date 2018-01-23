import types from './types';
import axios from 'axios';


const BASE_URL = 'http://api.reactprototypes.com';

export function signUp(cred){

    return dispatch =>{
        axios.post(`${BASE_URL}/signUp`, cred).then(resp =>{
            console.log('response from sign up', resp)

            localStorage.setItem('token', resp.data.token)

            dispatch({type: types.SIGN_UP})
        }).catch(err=>{
            console.log('err', err);
            dispatch({
                type: types.ERROR,
                payload: err.response.data.error
            })
        })
    }

}

export function signIn(cred){

    return dispatch =>{
        axios.post(`${BASE_URL}/signin`, cred).then(resp =>{
            console.log('response from sign in', resp)

            localStorage.setItem('token', resp.data.token)

            dispatch({type: types.SIGN_IN})
        }).catch(err=>{
            dispatch({
                type: types.ERROR,
                payload: 'invalid sign in information'
            })
        })
    }

}
