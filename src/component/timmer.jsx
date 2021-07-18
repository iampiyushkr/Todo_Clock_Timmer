import {  useState } from "react"

export default function Timmer() {
    const [counter, setCounter] = useState()
    const [limit,setLimit]=useState()
    
    const Start=() => {
        
            const stop = setInterval(function () {
                setCounter(function (prevCounter) {
                    if (prevCounter+1 === Number(limit)) {
                       console.log("stop")
                        clearInterval(stop);
                    }
                    console.log(prevCounter,Number(limit))
                    return Number(prevCounter) + 1
                })
            }, 1000)
         
      
    }
    return <div>
        <input type="number" onChange={(e) => { setCounter(e.target.value) }} />
        <input type="number" onChange={(e) => { setLimit(e.target.value) }} />
        <button onClick={() => {
            Start()
        }}>Start</button>
        <h1>{counter}</h1>
        <h1>{ limit}</h1>
    </div>
}