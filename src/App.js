import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'Terminar mi curso', completed: false},
  {text: 'Llorar', completed: false},
  {text: 'Llorar x2', completed: false},
]

function App() {
  return (

    <React.Fragment>

      <TodoCounter completed={16} total={25} />
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} />
        ))}
 
      </TodoList>
      
     <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
