import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import MovieQuotes from './movie';
import SignIn from './sign_in';
import SignUp from './sign_up';
import Nav from './nav';
import '../assets/css/app.css';



const App = () => (
    <div className="app">
        <Nav />
        <div className="container">
            <Route path="/" exact component={Home}/>
            <Route path="/movie-quotes" component={MovieQuotes}/>
            <Route path="/sign-in" component={SignIn}/>
            <Route path="/sign-up" component={SignUp}/>
        </div>
    </div>
);

export default App;
