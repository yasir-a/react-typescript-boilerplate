import React from 'react'
import Counter from './component/Counter'
import './style.css'
const enviroment: string = process.env.NODE_ENV
const endPointName: string = process.env.name
const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <p>Lets add here some text real quick. wow amazing</p>
      <p>{`Mode:${enviroment} ${endPointName}`}</p>
      <Counter />
    </div>
  )
}

export default App
