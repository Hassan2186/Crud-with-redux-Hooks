import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './App.css'
function App() {
  return (
    <div className='app'>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  )
}

export default App

