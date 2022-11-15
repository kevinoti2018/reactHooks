import React,{useState,useMemo} from 'react'

function Counter() {
    const [count1,setCount1]= useState(0)
    const [count2,setCount2]= useState(0)

    const increaseCount1 = ()=>{
        setCount1(prev=> prev+1)
    }
    const increaseCount2 = ()=>{
        setCount2(prev=> prev+1)
    }

    const isEven = useMemo(
        ()=>{
            let i =0
            while(i<2000000000) i++
            return count1 % 2 === 0
        },[count1]
    )
  return (
    <div>
        <div>
         <button onClick={increaseCount1}> Count one {count1}</button>
         <span>{ isEven ? " Even " : " Odd "}</span>
        </div>
        <div>
        <button onClick={increaseCount2}> Count one {count2}</button>
        </div>
       
    </div>
  )
}

export default Counter