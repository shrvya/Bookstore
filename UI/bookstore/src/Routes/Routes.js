
import { BrowserRouter as Router,  Route } from "react-router-dom";
import {Registration} from '../pages/Registration'
import {Login} from '../pages/Login'
import { Forgot } from "../pages/Forgot";
import {Reset} from "../pages/Reset";

import Dashboard from "../pages/Dashboard";
import CartPage from '../pages/CartPage'
import OrderSummary from '../pages/OrderSummary'
function Routes() {
  return (
    
    <div className="App">
    <Router>
         <Route path="/" exact component={Registration} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot" exact component={Forgot} />
        <Route path="/users/reset/:token" exact component={Reset} /> 
     
      <Route path="/Dashboard" exact component={Dashboard} />
       <Route path="/CartPage" exact component={CartPage} /> 
       <Route path="/OrderSummary" exact component={OrderSummary} /> 
    </Router>
  </div>
  );
}

export default Routes;
