import React,{useState, useCallback} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'
const ParentComponent = () => {
    const [age,setAge] = useState(25)
    const[salary,setSalary] = useState(50000)
    const incrementAge = useCallback(
        ()=>{
            setAge(age +1)
        },[age]
    ) 
    const incrementSalary = useCallback( ()=>{
        setSalary(salary + 1000)
    },[salary]) 
  return (
    <div>
        <Title/>
        <Count text='Age' count={age} />
        <Button handleClick={incrementAge}>Increase Age</Button>
        <Count text='salary' count={salary} />
        <Button handleClick={incrementSalary} >increment Salary </Button>
    </div>
  )
}

export default ParentComponent