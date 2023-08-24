// Dependencies
import './CreateTodoButton.css'; // Import CSS Styles from external file

// Component: CreateTodoButton
function CreateTodoButton() {
    return(
        <button 
            className='create-todo'
            onClick={
                // JS code must be encapsulated inside a function
                (event) => {
                    console.log('onClick est');
                    console.log(event);
                    console.log(event.target);
                }
            }
        >+</button>
    );
}

export { CreateTodoButton };