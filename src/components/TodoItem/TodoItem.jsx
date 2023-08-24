// Dependencies
import './TodoItem.css'; // Import CSS Styles from external file

// Two ways of passing props:
// 1. function ComponentName(props) {} // prop 'object'. Need to call prop.nameOfProperty for ex prop.total
// 2. function ComponentName({ propName1, propName2, etc }) {} // destructured with named props. No need to call prop.nameOfProperty

// Component: TodoItem
function TodoItem(props) {
    return(
      <li className='todo-item'>
        {/* Use {` `} to make conditional classes */}
        {/* Using JS interpolation ${} with a ternary operator ${condition && 'className' IF AND ONLY IF condition is True}. */}
        <span className={`todo-item-check ${props.completed && 'todo-item-check-active'}`}> 
          V
        </span>
        {/* Another way of using ternary operator */}
        <p className={`todo-item-content ${props.completed ? 'todo-item-content-complete' : ''}`}>
          {props.text}
        </p>
        <span className='todo-item-delete'>
          X
        </span>
      </li>
    );
}

export { TodoItem };