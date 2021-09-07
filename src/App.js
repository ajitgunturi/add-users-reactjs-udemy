import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {

    const [usersList, setUsersList] = useState([]);
    const [errorState, setErrorState] = useState();
    const addUserHandler = (userName, userAge) => {
        if (userName.trim().length===0 || userAge.trim().length===0){
            setErrorState({title: "Invalid Input", message: "Please enter valid name and age (non empty values)"})
            return;
        }
        if (+userAge<0){
            setErrorState({title:"Invalid Input", message: "Please enter a non negative number for age"})
            return;
        }
        setUsersList((prevUsersList) => {
            return [...prevUsersList, {name: userName, age: userAge, id: Math.random().toString()}];
        });
    }

    const errorHandler = () => {
        setErrorState(null);
    };

  return (
      <React.Fragment>
          {errorState && <ErrorModal title={errorState.title} message={errorState.message} onConfirm={errorHandler}/>}
          <AddUser onAddUser={addUserHandler} />
          <UsersList users={usersList}/>
      </React.Fragment>
  );
}

export default App;
