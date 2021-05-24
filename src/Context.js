import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {BioData} from './App.js'
function Context()
{
    const contextt=useContext(BioData)
    return(
        <>
            <h1>Hello Welcome To Context Hook</h1>
            <h6 className="text-info">All Background color,fontsize,and Name in bold coming from context</h6>
                <div style={{backgroundColor:contextt.background,fontSize:contextt.fontsize}}>the ans id is <b>{contextt.name}</b></div>
               <Link to="/hook/ref"> <button className="btn btn-warning">Next useRef</button></Link>
            
        </>
    )
}
export default Context