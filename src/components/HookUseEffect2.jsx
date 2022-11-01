import React,{useEffect,useState} from 'react'

const HookUseEffect2 = () => {
    const [x ,setX] = useState(0)
    const [y ,setY] = useState(0)
    const mouseMove = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',mouseMove)

        return(()=>{
            console.log('component unmount');
            window.removeEventListener('mousemove',mouseMove)
        })
    },[])
  return (
    <div>
        Hooks - x:{x} y:{y}
    </div>
  )
}

export default HookUseEffect2