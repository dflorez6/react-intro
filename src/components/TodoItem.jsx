// Component: TodoItem

// Two ways of passing props:
// 1. function ComponentName(props) {} // prop 'object'. Need to call prop.nameOfProperty for ex prop.total
// 2. function ComponentName({ propName1, propName2, etc }) {} // destructured with named props. No need to call prop.nameOfProperty

function TodoItem(props) {
    return(
      <li>
        <span>V</span>
        <p>{props.text}</p>
        <span>V</span>
      </li>
    );
}

export { TodoItem };