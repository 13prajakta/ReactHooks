import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
function Effect(){
    const[counter,setCounter]=useState(0)
    const[number,setnumber]=useState(0)
    useEffect(() => {
        setnumber(number+1)
       
    }, [counter]);
    return(
        <div>
            <h1>Welcome To The Effect Hook</h1>
            <div>
                <label className="text-info" style={{fontWeight:"bold"}}>First Number</label><br></br>
                <input disabled  value={counter} />
            </div>
            <div>
                <label className="text-info" style={{fontWeight:"bold"}}>Next Number</label>
                <br></br>
                <input disabled  value={number} />
                
            </div>
            <br></br>
            <button className="btn btn-info" onClick={()=>setCounter(counter+1)}>Click Me</button>
            &nbsp;
            <Link to="/hook/memo"><button className="btn btn-warning">Next useMemo</button></Link>

        </div>
    )
}

export default Effect