import React from 'react';
import { connect } from 'react-redux';
import { Field , reduxForm } from 'redux-form';
import { renderInput } from '../helpers';
import { signUp }  from '../actions';

class SignUp extends React.Component{



    handleSignUp(value){
        console.log('vals', value);

        this.props.signUp(value);
    }


    render(){

        const {handleSubmit} = this.props;

        return(
            <div>
                <h1 className="sign center-align">Sign Up</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card grey lighten-4">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field name="email" type="text" placeholder="please type email address" component={renderInput}/>
                                    <Field name="password" type="password" placeholder="what's the secret code" component={renderInput}/>
                                    <Field name="confirm" type="password" placeholder="REPEAT THE SECRET CODEEEE" component={renderInput}/>
                                    <div className="center-align red-text" >{this.props.formError}</div>
                                    <button  className="btn pink lighten-2">Sign Up</button>
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
    if(values.password!==values.confirm){
        error.confirm= ' Passwords need to match';
    }

    return error;
}


SignUp = reduxForm({
    form: 'sign_up',
    validate: validate
})(SignUp);

function mapStateToProps(state){
    return{
        formError: state.user.error
    }
}


export default connect(mapStateToProps,{signUp})(SignUp);
