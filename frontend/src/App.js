import React from 'react'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'

//Components
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
    return (
        <div>
            <Router>

                <Route exact path = "/login" component ={Login}/>
                <Route exact path = "/register" component ={Register}/>

            </Router>
            
        </div>
    )
}

export default App;
