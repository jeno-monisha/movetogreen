import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Home';
import Donate from './components/Donate/Donate';
import Payment from './components/Payment/Payment';
import { AuthProvider } from "./context/AuthContext"
import Signup from "./Signup"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"


function App() {
  return (
   
    <Router>
    
    <div className="App">
      
    <Header/>
              <AuthProvider>
        <Routes>
		     

       
            <Route exact path='/' element={<Home />}  />
             
            <Route exact path='/Login' element={<Login/>} />

            <Route exact path='/Signup' element={<Signup/>} />
			
		      	<Route exact path="/Dashboard"  element={ <Dashboard />}/>

           <Route exact path="/update-profile"  element={ <UpdateProfile />} />

            <Route exact path='/Donate' element={<Donate/>} />

            <Route exact path='/Payment' element={<Payment/>} />
			
		      	<Route exact path='/forgot-password' element={<ForgotPassword/>} />
			 
			 
			
          
          </Routes>
      </AuthProvider>

    </div>
</Router>
  );
}

export default App;