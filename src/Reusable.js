import {useEffect} from 'react'
const Reusable=(counter)=>
{
    useEffect(() => {
        console.log("welcome to reusable function")
        if(counter>= 1){
            document.title=`visiters (${counter})`
        }
        else{
            document.title=`visiters `
        }
    }, [counter]);
}
export default Reusable