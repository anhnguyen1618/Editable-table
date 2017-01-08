import React from 'react';
import { render } from 'react-dom';

const Box = (props) => {
    return <td >
			{props.isEdited ? <Input {...props}/>: <span onClick={props.onEdit(props.type)} >{props.value}</span> }
			</td>
}

const Input = (props) => {
    const shouldFocus = props.isFocused === props.type;
    if (props.type !== "gender") {
        return <input 
        			type={props.type === "age" ? "number" : "text"} 
        			autoFocus={shouldFocus} 
        			onChange={props.updateInfo} 
        			defaultValue={props.value} 
        			min={props.type === "age" ? 0 : null} 
        			max={props.type === "age" ? 100 : null}
        			className="form-control"/>
    }


    return <select autoFocus={shouldFocus} onChange={props.updateInfo} defaultValue={props.value} className="form-control" >
				<option>Male</option>
				<option>Female</option>						
			</select>
}

Input.propTypes = {
    type: React.PropTypes.string.isRequired,
    isFocused: React.PropTypes.string.isRequired,
    updateInfo: React.PropTypes.func.isRequired,
};



export default Box;
