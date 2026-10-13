import React, { useEffect, useState } from 'react'

function MyUseEffect() {

    const [counter, setCounter] = useState(0);
    const [pointer, setPointer] = useState(0);
    function increaseCounter(){
    setCounter(counter+10);
    
}
    function decreasePointer(){
        setPointer(pointer+10)
    }
    useEffect(() => {
        console.log("counter="+counter);
        console.log("counter="+pointer);
    })

    return (
        <div>
            <h2>Counter APP</h2>
            <h1>counter value={counter}</h1>
            <h1>pointer value={pointer}</h1>
            <button onClick={increaseCounter}>
                counter
            </button>
            <button onClick={decreasePointer}>
                pointer
            </button>
        </div>
    );
}

export default MyUseEffect;