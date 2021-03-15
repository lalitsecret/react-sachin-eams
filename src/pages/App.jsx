import React from "react";
import Login from './Login'
import Admin from './admin/App'
import Faculty from './faculty/App'
import Student from './student/App'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    	<Switch>
    		<Route exact path="/" component={Login} />
    		<Route exact path="/admin/:x" component={Admin} />
    		<Route exact path="/faculty/:x" component={Faculty} />
    		<Route exact path="/student/:x" component={Student} />
    	</Switch>
    </BrowserRouter>
  );
}
