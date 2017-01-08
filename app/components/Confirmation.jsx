import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
const Confirmation = (props) => {
    return <Modal show={props.show} onHide={props.hide}>
		    	<Modal.Header>
			        <Modal.Title id="contained-modal-title">Remove person</Modal.Title>
			    </Modal.Header>
		        <Modal.Body>
		            Are you sure you want to remove this entry?
		        </Modal.Body>
		        <Modal.Footer>
		            <Button onClick={props.hide}>CANCEL</Button>
		            <Button bsStyle="primary" onClick={props.confirm(props.idOfDeleteEntry)}>YES</Button>
		        </Modal.Footer>
		    </Modal>
}

Confirmation.propTypes = {
    show: React.PropTypes.bool.isRequired,
    idOfDeleteEntry: React.PropTypes.string,
    hide: React.PropTypes.func.isRequired,
    confirm: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        show: state.showConfirm,
        idOfDeleteEntry: state.idOfDeleteEntry,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide: () => dispatch({ type: "HIDE_CONFIRM" }),
        confirm: (id) => () => {
            dispatch({ type: "DELETE_PEOPLE", id });
            dispatch({ type: "HIDE_CONFIRM" });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
