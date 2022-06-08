import React from 'react'
import { useCountContextConsumer } from './context/countContext'
const Count2 = () => {
    const{count}=useCountContextConsumer();
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Count2