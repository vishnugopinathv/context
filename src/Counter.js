import { useCountContextConsumer } from "./context/countContext"
const Counter = () => {
    const{count,setCount}=useCountContextConsumer();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
    </div>
  )
}

export default Counter