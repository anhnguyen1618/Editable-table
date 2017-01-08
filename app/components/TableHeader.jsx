import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';

const TableHeader = (props) => {
    const { sort, sortBy, sortOrder } = props;
    return <thead>
				<tr>
		      		{["Name", "Gender", "Age"].map((title)=><th key={title} className={title === "Name"? "col-md-4" :"col-md-3"}>					     
			      		<span onClick={ sort(sortBy, sortOrder) }>{title}</span>	
				      	{title.toLowerCase() === sortBy ? <span 
				      		className={"glyphicon glyphicon-sort-by-attributes"+(sortOrder === "descending" ? "-alt" : "")}
				      		></span> : null} 				      				
				    </th>)}
				    <th className="col-md-2" id="edit"></th>
				</tr>
			</thead>
}

TableHeader.propTypes = {
    sortBy: React.PropTypes.string.isRequired,
    sortOrder: React.PropTypes.string.isRequired,
    sort: React.PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
    return {
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sort: (currentSortBy, currentSortOrder) => (e) => {
            const sortBy = e.target.innerHTML.toLowerCase();
            if (sortBy !== currentSortBy) {
                dispatch({ type: "CHANGE_SORT_CATEGORY", sortBy });
            } else {
                /*Reverse the order of the list when users click on the current sorted category*/
                dispatch({ type: "CHANGE_SORT_ORDER", sortOrder: (currentSortOrder === "ascending" ? "descending" : "ascending") });
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
