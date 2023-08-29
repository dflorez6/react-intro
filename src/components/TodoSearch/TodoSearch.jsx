// Dependencies
import React from 'react';
import './TodoSearch.css'; // Import CSS Styles from external file

// Component: TodoSearch
function TodoSearch() {

    // React State
    // const [state, setState] = React.useState(initalState); // 
    // State is immutable in React, so to work with it, we must declare a const array with two values: [stateName, stateUpdater]
    // stateUpdater is a function and must be used like so: stateUpdater(NEW_STATE_VALUE)
    // On the right side, we call the function React.useState(initalState), inside () declare what the inital state value should be
    const [searchValue, setsearchValue] = React.useState('');

    console.log('stored searchValue: ' + searchValue);

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