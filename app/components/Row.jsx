import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import id_generator from "uuid/v4";
import Box from './Box.jsx'
export class Row extends React.Component {
    static propTypes = {
        man: React.PropTypes.object.isRequired,
        deletePeople: React.PropTypes.func.isRequired,
        updatePeople: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.man, { isEdited: false, isFocused: null });
        const { name, gender, age, id } = this.props.man;
        this.infoObj = { name, gender, age, id };
    }

    render() {
        const { isEdited, name, gender, age, id, isFocused } = this.state;
        const passProps = { onEdit: this.onEdit, isEdited, isFocused };
        const infos = [{ type: "name", value: name }, { type: "gender", value: gender }, { type: "age", value: age }];
        return (
            <tr>
				{infos.map(info => <Box key={id_generator()} {...info} {...passProps} updateInfo={this.updateInfo(info.type)}/>)}
				<td id="editor">
					<div>
						<span onClick={this.onEdit("name")} className={"glyphicon glyphicon-pencil "+(isEdited ? "isEdited" : null)}/>
						<span onClick={() => this.props.deletePeople(id)} className="glyphicon glyphicon-remove"/>	
					</div>		
				</td>
			</tr>
        );
    }

    onEdit = (isFocused) => (e) => {
        if (this.state.isEdited && validateUpdate(this.infoObj)) {
            //	Finish updating entry and save changes 
            this.setState(Object.assign({}, this.state, this.infoObj, { isEdited: false }));
            this.props.updatePeople(this.infoObj);
        } else {
            // render input fields when switching to edit mode, focus on the input that is clicked
            const { name, gender, age, id } = this.state;
            this.infoObj = { name, gender, age, id };
            this.setState(Object.assign({}, this.state, { isEdited: true, isFocused }));
        }
    }

    updateInfo = (type) => (e) => {
        //dynamically change information object when the values from child inputs change
        this.infoObj[type] = e.target.value;
    }

}

const validateUpdate = (form) => {
    if (form.name === "" || form.age < 0 || form.age === "") {
        alert("Your form is not valid!");
        return false;
    }
    return true;
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePeople: (id) => {
            dispatch({ type: "ADD_ID", id });
            dispatch({ type: "SHOW_CONFIRM" });
        },
        updatePeople: (updatedPerson) => {
            dispatch({ type: "UPDATE_INFO", updatedPerson });
        }

    }
}



export default connect(null, mapDispatchToProps)(Row);
