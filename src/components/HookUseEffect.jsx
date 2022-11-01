import React,{useState,useEffect} from 'react'

const HookUseEffect = () => {
    const [count,setCount] = useState(0);
    const[name, setName] = useState('');
    const addNum = ()=> setCount(count + 1)
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })
  return (
    <div>
    <input type='text' value={name} onChange={ e=> setName(e.target.value)} />
        <button onClick={addNum}>Clicked {count} times</button>
    </div>
  )
}

export default HookUseEffect