import React from 'react';
import { render } from 'react-dom';
import TableHeader from "./TableHeader.jsx";
import Row from './Row.jsx';

const Table = (props) => {
    return <div className="row">
	    		<div className="col-lg-8 col-lg-offset-2">
			        <table className="table table-striped">
			        	<TableHeader/>
					    <tbody>
						    {props.paginatedPeople.map(man =><Row key={man.id} man={man}/>) } 
					    </tbody>
			        </table>
			    </div>
		   	</div>
}

export default Table;
