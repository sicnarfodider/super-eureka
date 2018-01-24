import React from 'react';
import { connect } from 'react-redux';
import { getQuote } from '../actions';

class MovieQuotes extends React.Component{

    componentDidMount(){
        if(this.props.auth){
            this.props.getQuote();
        }
    }

    render(){
        return(
            <div>
                <button className="btn btn-float" onClick={this.props.getQuote}>Get New Quote</button>
                <h1 className="center-align">Movie Qoute</h1>
                <h3 className="center-align white-text">{this.props.quote}</h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        auth: state.user.auth,
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {getQuote})(MovieQuotes);
