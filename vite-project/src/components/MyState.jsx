import usestate from 'react'

export default function MyState() {
    const[counter,setcounter]=usestate(10);
    function increment(){
        setcounter(counter+10);
    }
    function decrement(){
        setcounter(counter-10);
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
    
  )
}
