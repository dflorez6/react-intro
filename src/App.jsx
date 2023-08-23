// Dependencies
import React from 'react';
import './App.css';
import logo from './platzi.webp';

// Components
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

// Example of creating a deafault Array to pass info to a Component (TodoItem) and allow React to render them
const defaultToDos = [
  { id: 0,text: 'Cut onions', completed: true },
  { id: 1,text: 'Walk the dogs', completed: false },
  { id: 2,text: 'Prepare lunch', completed: false },
  { id: 3,text: 'Lorem ipsum', completed: false },
];

// Component: App
function App() {
  return (
    // React MUST wrap all components in a single return. You can use <div className="">COMPONENTS</div>
    // as the wrapper OR <React.Fragment>COMPONENTS</React.Fragment>
    <React.Fragment>
      {/* JSX Comment */}

      <TodoCounter completed={4} total={9} /> { /* Pasing Props to Component */ }
      <TodoSearch />
      
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

    </React.Fragment>
  );
}

export default App;
