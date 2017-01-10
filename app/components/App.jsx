import React from 'react';
import { render } from 'react-dom';
import Form from "./Form.jsx";
import { Navbar } from "react-bootstrap";
import Confirmation from "./Confirmation.jsx";
import TableWrapper from "./TableWrapper.jsx";

const App = () => {
    return <div>
    			<nav className="navbar navbar-default">
				        <a href="#"><img src="static/logo.png" className="img-responsive" alt=""/></a>
				</nav>
    			<div className="container">
		    		<Form></Form>
		    		<Confirmation/>
		    		<TableWrapper/>
		    	</div>
	    	</div>
}

export default App;
