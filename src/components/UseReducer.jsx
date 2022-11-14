import React,{useReducer} from 'react'
const initialState = 0;
const reducer = (state,count)=>{
    switch(count){
        case 'increase':
            return state +1
        case 'decrease':
            return state -1
        case 'reset':
            return initialState
        default:
            return state
    }
}
const UseReducer = () => {
   const[counting,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        {counting}
        <button onClick={()=>dispatch('increase')}> increase</button>
        <button onClick={()=>dispatch('decrease')}> decrease</button>
        <button onClick={()=>dispatch('reset')}> reset</button>
        
    </div>
  )
}

export default UseReducer