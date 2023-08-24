// Dependencies
import './TodoSearch.css'; // Import CSS Styles from external file

// Component: TodoSearch
function TodoSearch() {
    return(
        <div className='form-group'>
            <input 
                type="search" name="" id="" placeholder="Find Task" className='form-control'
                onChange={
                    // JS code must be encapsulated inside a function
                    (event) => {
                        // console.log('onChange Test');
                        // console.log(event);
                        // console.log(event.target);
                        console.log(event.target.value);
                    }
                }
            />
        </div>        
    );
}

export { TodoSearch };