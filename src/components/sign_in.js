import React from 'react';
import { Field , reduxForm } from 'redux-form';
import { renderInput } from '../helpers';

class SignIn extends React.Component{



    handleSignIn(value){
        console.log('vals', value);
    }


    render(){

        const {handleSubmit} = this.props;

        return(
            <div>
                <h1 className="sign center-align">Sign In</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card grey lighten-4">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field name="email" type="text" placeholder="please type email address" component={renderInput}/>
                                    <Field name="password" type="password" placeholder="what's the secret code" component={renderInput}/>
                                    <button  className="btn pink lighten-2">Sign In</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values){
    const error={}

    if(!values.email){
        error.email = 'Please enter an email';
    }

    if(!values.password){
        error.password = 'Please enter a valid password';
    }

    return error;
}


SignIn = reduxForm({
    form: 'sign_in',
    validate: validate
})(SignIn);


export default SignIn;
