import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';

const Paginator = (props) => {
    return <Pagination
                items={props.numberOfPage}
                maxButtons={4}
                activePage={props.activePage}
                onSelect={(page)=>props.changePage(page)} 
            />
}

const mapStateToProps = (state) => {
    return {
        activePage: state.activePage,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (activePage) => {
            dispatch({ type: "CHANGE_PAGE", activePage })
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Paginator)
