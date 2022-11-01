import React ,{useState}from 'react'

const HookCounter2 = () => {
    const [items, setItems] =useState([ ])
    const addItem = ()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() *10)+1  
        }])
    }
  return (
    <div>
    <button onClick={addItem}>Add a number</button>
    <ul>
        {items.map(item=>(

            <li key={item.id}>
                <p>{item.value}</p>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default HookCounter2