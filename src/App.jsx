// Dependencies
import React from 'react';
import './styles/App.css';
import logo from './platzi.webp';

// Components
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

// Example of creating a deafault Array to pass info to a Component (TodoItem) and allow React to render them
const defaultToDos = [
  { id: 0,text: 'Cut onions', completed: true },
  { id: 1,text: 'Walk the dogs', completed: false },
  { id: 2,text: 'Prepare lunch', completed: false },
  { id: 3,text: 'Lorem ipsum', completed: true },
];

// Component: App
function App() {
  //==============  
  // React States
  //==============
  // const [state, setState] = React.useState(initalState); // 
  // State is immutable in React, so to work with it, we must declare a const array with two values: [stateName, stateUpdater]
  // stateUpdater is a function and must be used like so: stateUpdater(NEW_STATE_VALUE)
  // On the right side, we call the function React.useState(initalState), inside () declare what the inital state value should be
  // State can ONLY be shared from parent to children. That is why we moved the searchValue state from TodoSearch Component to to the App Component    
  const [searchValue, setsearchValue] = React.useState('');
  console.log('stored searchValue: ' + searchValue);

  // State for todos
  const [todos, setTodos] = React.useState(defaultToDos);

  // Derivative States (based on an actual state, the one that uses React.useState(), 
  // derivative states do some calculations or other manipulations to pass the value to children components)
  // .filter() Array method
  const completedTodos = todos.filter(
    todo => todo.completed
    // Another way: todo => !!todo.completed // with the double negation !! it converts all to boolean values
  ).length; 
  const totalTodos = todos.length;

  return (
    // React MUST wrap all components in a single return. You can use <div className="">COMPONENTS</div>
    // as the wrapper OR <React.Fragment>COMPONENTS</React.Fragment> OR <></> "empty brackets"
    <> {/* Empty brackets <> == <React.Fragment> */}      
        <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}
        /> { /* Pasing Props to Component */ }
        
        {/* We pass to the children components the values of the state as props */}
        <TodoSearch 
          searchValue={searchValue} 
          setsearchValue={setsearchValue}
        />
        
        <TodoList>
          {/* 
          The map() method of Array instances creates a NEW array populated with the results of calling a 
          provided function on every element in the calling array. 
          This will allow to render a TodoItem Components for every element in the original Array. 
          */}
          {/* We can use an arrow function to render each Component */}
          {defaultToDos.map(todo =>
            <TodoItem 
              key={todo.id} // Each child in a list must have a unique key
              text={todo.text}
              completed={todo.completed}
            /> 
          )}
        </TodoList>

        <CreateTodoButton />
    </> // {/* Empty brackets </> == </React.Fragment> */}
  );
}

export default App;
