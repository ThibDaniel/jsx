import { useEffect, useState } from "react";

export function Counter() {
    const [counter, SetCounter] = useState(0)
    
    useEffect(() => {
        console.log(counter);
    },[counter])

    function Increment() {
        SetCounter((c) => c + 1)
    }
    function Decrement(){
        SetCounter((c) => c - 1)
    }
    function Reset() {
        SetCounter((c) => 0)
    }
    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}