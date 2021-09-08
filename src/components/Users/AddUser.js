import React, {useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = props => {

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const addUserHandler = (event) => {
		event.preventDefault();
		props.onAddUser(nameInputRef.current.value, ageInputRef.current.value);
		nameInputRef.current.value="";
		ageInputRef.current.value="";

	};

	return(
		<div>
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type = "text"
						ref={nameInputRef}/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type = "number"
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>

	);
};

export default AddUser;
