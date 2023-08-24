// Dependencies
import './TodoList.css'; // Import CSS Styles from external file

// Two ways of passing props:
// 1. function ComponentName(props) {} // prop 'object'. Need to call prop.nameOfProperty for ex prop.total
// 2. function ComponentName({ propName1, propName2, etc }) {} // destructured with named props. No need to call prop.nameOfProperty

// Component: TodoList
function TodoList({ children }) {
    return(
        <ul className='todo-list'>
            {children}   { /* React Property for all children within a component that has opening/closing tags */ }
        </ul>
    );
}

export { TodoList };