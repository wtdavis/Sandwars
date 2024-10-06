import {useState} from "react"

function Sidebar () {
    const [state, setState] = useState(0)


    const buttonCallback = () => {

    }

    return (
        <>
            <div className="button" onClick={e => {e.preventDefault(); buttonCallback()}}> 
                Push me! 
            </div>
            <div className="num-display"> </div>
        </>
    )
}
export default Sidebar