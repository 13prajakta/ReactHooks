import {useRef} from 'react'
import {Link} from 'react-router-dom'
function Ref()
{
    const refinput = useRef(null)
    const refdiv = useRef(null)
    function change()
    {
        refinput.current.value="100"
        refinput.current.focus()
        refdiv.current.style.background="red"
    }
    return(
        <>
            <h1>Welcome To useRef Hook</h1>
            <div ref={refdiv}>
                <input type="text" ref={refinput}></input><br></br><br></br>
                <button className="btn btn-info" onClick={change}> Click ME</button> &nbsp;
               <Link to="/hook/reducer"><button className="btn btn-warning">Next Reducer Hook</button></Link> 
            </div>
        </>
    )
}
export default Ref