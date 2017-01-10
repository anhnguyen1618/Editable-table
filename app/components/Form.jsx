import React from 'react';
import { connect } from 'react-redux';


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", age: "", gender: "Gender" };
    }

    render() {
        const { name, age, gender } = this.state;
        return (
            <div className="row">
        		<div className="col-lg-8 col-lg-offset-2">
        			<h1>Add a person</h1>
        			<form >
        				<div className="row">
				            <div className="col-xs-6">
				            	<input type="text" className="form-control" placeholder="Name" value={name} onChange={this.updateForm("name")}/>
				            </div>
				      		
				      		<div className="col-xs-2">
				      			<select className="form-control" value={gender} onChange={this.updateForm("gender")}>
				      				<option disabled>Gender</option>
							        <option>Male</option>
							        <option>Female</option>						
							    </select>
				      		</div>
				      		
				      		<div className="col-xs-2">
				      			<input type="number" className="form-control" placeholder="Age" min="0" max="100" value={age} onChange={this.updateForm("age")}/>
				      		</div>
				      		
				      		<div className="col-xs-1">
				      			<button type="button" className="btn btn-default" onClick={()=>this.submit()}>
				      				<span className="glyphicon glyphicon-plus"></span>
				      			</button>
				      		</div>		
			      		</div>	      		
			      	</form>
        		</div>
        	</div>

        );
    }
    updateForm = key => e => {
        const newObj = {};
        newObj[key] = e.target.value;
        this.setState(Object.assign({}, this.state, newObj));
    }
    submit = () => {
        if (this.state.name !== "" && this.state.age !== "" && this.state.gender !== "Gender") {
            this.props.addPerson(this.state);
            alert("Add person successfully!");
            this.setState({ name: "", age: "", gender: "Gender" });
        } else {
            alert("Your from is invalid!");
        }
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (person) => {
            dispatch({ type: "ADD_PEOPLE", person })
        }
    }
}
export default connect(null, mapDispatchToProps)(Form);
