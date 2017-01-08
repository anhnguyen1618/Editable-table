import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import Paginator from "./Paginator.jsx";
import Table from "./Table.jsx";

class TableWrapper extends React.Component {
    static propTypes = {
        sortBy: React.PropTypes.string.isRequired,
        sortOrder: React.PropTypes.string.isRequired,
        people: React.PropTypes.array.isRequired,
        activePage: React.PropTypes.number.isRequired,
        resetPage: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    componentWillUpdate(props) {
        /*
	    	Move the current active page to the previous one when
	    	users remove all items of the last page
	    */
        const numberOfPage = Math.ceil(props.people.length / 20);
        if (props.activePage > numberOfPage) {
            props.resetPage(numberOfPage);
        }
    }

    render() {
        const { people, sortBy, sortOrder, activePage, resetPage } = this.props;
        const list = sortPeople(people, sortBy, sortOrder);
        const { paginatedPeople, numberOfPage } = paginate(list, activePage);
        return <div>
	    			<Table paginatedPeople={paginatedPeople}/>	        
				    <center><Paginator numberOfPage={numberOfPage}/></center>
				</div>
    }
}
const sortPeople = (people, sortBy, sortOrder) => {
    /*
    	arguments: list of people, sort category, sort order
    	return list after being shorted
    */
    people.sort((a, b) => {
        const sortValueAscending = (sortBy !== "age" ? a[sortBy].localeCompare(b[sortBy]) : a[sortBy] - b[sortBy]);
        return sortOrder === "ascending" ? sortValueAscending : -sortValueAscending;
    })
    return people;
}

const paginate = (people, activePage) => {
    /*
    	arguments: list of people, current active page
    	=> calculate number of pages, first index, last index of the items in current page
    	return {list of people/page, total number of pages}
    */
    const numberOfPeople = people.length;
    const numberOfPage = Math.ceil(numberOfPeople / 20);
    const startIndex = (activePage - 1) * 20;
    return { paginatedPeople: people.slice(startIndex, startIndex + 20), numberOfPage }
}



const mapStateToProps = (state) => {
    return {
        sortBy: state.sortBy,
        sortOrder: state.sortOrder,
        people: state.people,
        activePage: state.activePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetPage: (prevPage) => {
            dispatch({ type: "CHANGE_PAGE", activePage: prevPage });
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper);
