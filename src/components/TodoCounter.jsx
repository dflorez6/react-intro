// Dependencies
import '../styles/TodoCounter.css'; // Import CSS Styles from external file

// Two ways of passing props:
// 1. function ComponentName(props) {} // prop 'object'. Need to call prop.nameOfProperty for ex prop.total
// 2. function ComponentName({ propName1, propName2, etc }) {} // destructured with named props. No need to call prop.nameOfProperty

// Component: TodoCounter
function TodoCounter({ total, completed}) {
    return(
      <h1 className='todo-counter'>
        You have completed <b>{completed}</b> of <b>{total}</b> tasks
      </h1>
    );
  }

  export { TodoCounter };