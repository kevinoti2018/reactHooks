import React,{useState} from 'react'
import HookUseEffect2 from './HookUseEffect2'

const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle display</button>
         {display && <HookUseEffect2/>}
    </div>
  )
}

export default MouseContainer