import {useState} from 'react'
import Reusable from './Reusable.js'
function CustomHook()
{
    const[counter,setCounter]=useState(0)
    Reusable(counter)
    return (
        <>
        <h1>Welcome to Custom Hook</h1>
        <h6 className="text-info">See browser Title Visiter Count Looking in browser title too</h6>
        <h3>{counter}</h3>
        <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>See Visitor Count</button>
        
        </>
    )
}
export default CustomHook