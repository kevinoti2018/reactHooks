import {React,useState} from 'react'

const ClassCounter = () => {
    const initialCount = 0
    const [counter,setCounter] = useState(initialCount)
  return (
    <div>
       Count : {counter}
       <button onClick={()=>setCounter(counter + 1)}>add</button>
       <button  onClick={()=>setCounter(initialCount)}>reset</button>
       <button  onClick={()=>setCounter(counter - 1)}>deduct</button>
       
    </div>
  )
}

export default ClassCounter