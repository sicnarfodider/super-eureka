import React from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent, path='/'){
    class Auth extends React.Component{

        componentWillMount(){
            if(this.props.auth){
                this.props.history.push(path)
            }
        }

        componentWillReceiveProps(nextProps){
            if(nextProps.auth){
                this.props.history.push(path)
            }
        }

        render(){
            return<WrappedComponent {...this.props} />
        }
    }


    function mapStateToProps(state){
        return{
            auth : state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}
