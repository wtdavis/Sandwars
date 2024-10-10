import {useState} from "react";
import "./sidebar.css"

function Sidebar () {
    const [state, setState] = useState(0)


    const buttonCallback = () => {
        setState((state + 1))
    }


    return (
        <>
        <div className="sidebar-container">
            <div className="sidebar-logo logo">
                <p className="logo-line logo-line-0">Community</p>
                <p className="logo-line logo-line-1">Land &</p>
                <p className="logo-line logo-line-2">Water</p>
                <p className="logo-line logo-line-3">Coalition</p>
            </div>
            <div className="sidebar sidebar-button-list">
                <div className="sidebar-button">Sand and Soil Theft</div>
                <div className="sidebar-button">The Pine Barrens</div>
                <div className="sidebar-button">Our Mission</div>
                <div className="sidebar-button sidebar-button-coalition">Join the Coalition!</div>
                <div className="sidebar-line-break"></div>
                <div className="sidebar-button sidebar-button-resources">Resources</div>
            </div>
        </div>
        </>
    )
}
export default Sidebar