import {useState,useMemo} from 'react'
import {Link} from 'react-router-dom'
function Memo()
{
    const[counter,setCounter]=useState(0)
    const[item,setItem]=useState(0)
    const mutlicountt=useMemo(function multicount()
    {
        console.log("multiconter set")
        return counter*5
    },[counter])
    return(
        <div>
        <h1>Hello Welcome To Memo Hook</h1>
        <h6 className="text-info">Check Console to see Effective output onclick of counter and onclick of item</h6>
        <input value={counter} />
        <br></br>
        <input value={item} />
        <br></br>
        <h1>{mutlicountt}</h1>
        <button className="btn btn-warning" onClick={()=>setCounter(counter+1)}>counter click</button>
       &nbsp; <button className="btn btn-warning" onClick={()=>setItem(item+1)}> item click</button>
       &nbsp; <Link to="/hook/context"><button className="btn btn-info"> Next Context</button></Link>
       
       </div>

    )
}
export default Memo