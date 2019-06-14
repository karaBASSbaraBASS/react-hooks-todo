import React, {useState} from 'react';
import Todo from './components/Todo'
import AddTodoForm from './components/Add-todo-form'
import Header from './components/Header'
import './App.css';

function App() {
  const [todos, updateTodo] = useState ([
    {
      item: 'learn react hooks',
      completed: false
    },
    {
      item: 'create a simple app to illustrate the above',
      completed: false
    },
    {
      item: 'push to git hub',
      completed: false
    }
  ]);
  const addTodo = item => {
    const newTodos = [...todos, {item}];
    updateTodo(newTodos);
  }
  const completTodo = index => {
    const NewTodos = [...todos];
    NewTodos[index].completed=true;
    updateTodo(NewTodos);
  }
  const deleteTodo = index => {
    const NewTodos = [...todos];
    NewTodos.splice(index, 1);
    updateTodo(NewTodos);
  }
  return (
    <div id="role" role="list" className="ui divider relaxed list ui mainColumn">
      <Header/>
      <div role="listitem" className="item todoList">
        {todos.map((todo, index) => (
          <Todo
            key={ index }
            index={index}
            todo={todo}
            completTodo={completTodo}
            deleteTodo={deleteTodo}
            indexComplete={todos[index].completed}
          />
        ))}
        <AddTodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
