// Dependencies
import React from 'react';
import './TodoSearch.css'; // Import CSS Styles from external file

// Component: TodoSearch
// State was move to the parent component 'App', so now from parent we are sending as props the values
// to work with the state in this children component
function TodoSearch({searchValue, setsearchValue}) {
    return(
        <div className='form-group'>
            <input 
                type="search" name="" id="" placeholder="Find Task" className='form-control'
                value={searchValue}
                onChange={
                    // JS code must be encapsulated inside a function
                    (event) => {
                        setsearchValue(event.target.value); // Updating state that is tied to the input value
                        console.log(event.target.value);
                    }
                }
            />
        </div>        
    );
}

export { TodoSearch };