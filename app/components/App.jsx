import React from 'react';
import { render } from 'react-dom';
import Form from "./Form.jsx";
import Confirmation from "./Confirmation.jsx";
import TableWrapper from "./TableWrapper.jsx";

const App = () => {
    return <div className="container">
	    		<Form></Form>
	    		<Confirmation/>
	    		<TableWrapper/>
	    	</div>
}

export default App;
