import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
