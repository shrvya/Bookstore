
import { BrowserRouter as Router,  Route } from "react-router-dom";
import {Registration} from '../src/pages/Registration'
import {Login} from '../src/pages/Login'
import { Forgot } from "./pages/Forgot";
import {Reset} from "./pages/Reset";
import Appbar from "../src/components/Appbar"
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    
    <div className="App">
    <Router>
        {/* <Route path="/" exact component={Registration} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot" exact component={Forgot} />
        <Route path="/users/reset/:token" exact component={Reset} /> */}
      <Dashboard/>
        {/* <Route path="/" exact component={Appbar} /> */}
    </Router>
  </div>
  );
}

export default App;
