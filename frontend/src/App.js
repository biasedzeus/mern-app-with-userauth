import "./App.css"
import React from 'react'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'

//Components
import Login from './Components/Login'
import Register from './Components/Register'
import DashBoard from './Components/DashBoard'



const App = () => {
    return (
        <div className ="container">
            <Router>

                <Route exact path = "/login" component ={Login}/>
                <Route exact path = "/register" component ={Register}/>
                <Route exact path = "/dashboard" component ={DashBoard}/>

                <a href="/login">Login</a>
                <br/>
                <a href="/register">Register</a>


            </Router>
            
        </div>
    )
}

export default App;
