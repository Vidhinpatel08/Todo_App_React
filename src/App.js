import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import Error from './MyComponents/Error';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const addTodo = (title, desc) => {

    let sno;
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo])
    // console.log(myTodo)
    // console.log("add Todo", myTodo)
  }

  const onDelete = (todo) => {
    // Delete this way in react in Not Works. 
    // let index = todos.indexOf(todo);
    // todos.splice(index,1)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("Deleted Todo", todo)
    // localStorage.setItem('todos', JSON.stringify(todos))
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Router>
        <Header title="Todo-List" searchBar={false} />
        <Routes>
          <Route path='/' element={((
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          ))} >
          </Route>
          <Route path='/index.html' element={((
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          ))} >
          </Route>
          <Route path='/index' element={((
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          ))} >
          </Route>
          <Route path='/about' element={<About />}>
          </Route>
          <Route path='*' element={<Error/>}>
          </Route>
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;
