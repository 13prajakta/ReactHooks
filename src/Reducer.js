import {useReducer} from 'react'
import {Link} from 'react-router-dom'
function Reducer()
{
    const initialState=0
    const reducer=(state,action)=>
    {
        console.log(state,action)
        if(action.type==="INCREMENT"){
        return state+1;
        }
        if(action.type==="DECREMENT"){
        return state-1;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <h1>Welcome to reducer hook</h1>
        <h6 className="text-info">Check Console to see Effective output onclick </h6>
        <h3>{state}</h3>
        <button className="btn btn-info" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button className="btn btn-info" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <Link to="/hook/custom"><button className="btn btn-warning">Next CustomHook</button></Link>
        </>
    )
}
export default Reducer