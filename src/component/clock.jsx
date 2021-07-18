import { useState } from "react"
export default function Clock() {
    
  
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second,setSecond]=useState()
    const [load,setLoad]=useState(false)
    
    const Start = () => {
        setLoad(false)
        
        }
    const stop = () => {
        setLoad(true)
        
    }
    
             setInterval(function () {

                //console.log(load)
       
               
             
                const data = new Date()
                var hours = data.getUTCHours() + 6;
                if (hours >= 24) {
                    hours = hours - 24
                }
                var minut = data.getUTCMinutes() + 30;
                if (minut >= 59) {
                    if (minut === 60) {
                        minut = 0;
                    } else {
                        minut = minut - 60;
                    }
                }
                const sec = data.getUTCSeconds();
                setHour(hours)
                setMinute(minut)
                setSecond(sec)
           
            }, 500)
        
    
    
    return <div>
        <button onClick={() => {
            Start()
        }}>Start</button>
        <button onClick={() => {
            stop()
        }}>Stop</button>
        {!load?<div style={{margin:"auto",fontWeight:"bold",backgroundColor:"blue",width:150,height:50,fontSize:35}}><span style={{fontWeight:"bold",color:"orange",fontSize:35}}>{hour}</span>:<span style={{fontWeight:"bold",color:"white",fontSize:35}}>{minute}</span>:<span style={{fontWeight:"bold", color:"green",fontSize:35}}>{second}</span></div>:<h1>Start:Your:Time</h1>}
    </div>
 }