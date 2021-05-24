import {useState } from "react";
import {Link } from "react-router-dom";
function State(){
    const[counter,setCounter]=useState(0)
    function square(){
       return counter*counter
    }

    return(
        <div>
            <h1 className="text-warning">Hello Welcome To The State Hook</h1>
            <input disabled value={counter}></input><br></br><br></br>
            <label className="text-info">Square Of Above Number</label><br></br>
            <input disabled value={square()}></input><br></br><br></br>
            <button className="btn btn-info btn-sm" onClick={()=>setCounter(counter+1)}>Click Me To Add</button>
            <button className="btn btn-danger btn-sm" onClick={()=>setCounter(counter-1)}>Click Me To Remove</button>
           <Link to="/hook/effect"> <button className="btn btn-warning">Next useEffect</button></Link>
        </div>
    )
}
export default State