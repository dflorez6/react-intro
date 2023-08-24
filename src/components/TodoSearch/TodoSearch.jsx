// Dependencies
import './TodoSearch.css'; // Import CSS Styles from external file

// Component: TodoSearch
function TodoSearch() {
    return(
        <div className='form-group'>
            <input type="search" name="" id="" placeholder="Find Task" className='form-control' />
        </div>        
    );
}

export { TodoSearch };