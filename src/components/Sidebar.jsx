import {useState} from "react"

function Sidebar () {
    const [state, setState] = useState(0)


    return (
        <>
            <div className="button"> 
                Push me! 
            </div>
            <div className="num-display"> </div>
        </>
    )
}
