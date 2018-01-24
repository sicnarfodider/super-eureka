import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import MovieQuotes from './movie';
import SignIn from './sign_in';
import SignUp from './sign_up';
import Nav from './nav';
import auth from '../hoc/auth';
import redirect from '../hoc/redirect';
import '../assets/css/app.css';



const App = () => (
    <div className="app">
        <Nav />
        <div className="container">
            <Route path="/" exact component={Home}/>
            <Route path="/movie-quotes" component={auth(MovieQuotes)}/>
            <Route path="/sign-in" component={redirect(SignIn,"/movie-quotes")}/>
            <Route path="/sign-up" component={redirect(SignUp,"/movie-quotes")}/>
        </div>
    </div>
);

export default App;
