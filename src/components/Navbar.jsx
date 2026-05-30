import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router";
import {toast} from "react-hot-toast"

function Navbar(props) {
    let isLoggedIn=props.isLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn
    return (  
        //linking to the home page
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">

            <Link to="/">
                <img src={logo} akt="Logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className="flex flex-row gap-3 text-gray-300">
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/">About</Link>
                    </li>

                    <li>
                        <Link to="/">Contact</Link>
                    </li>

                </ul>
            </nav>
            <div className="flex items-center gap-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-gray-700 text-gray-200 rounded-sm px-3 py-1 cursor-pointer hover:bg-gray-800 transition:all duration:200">
                            Login
                        </button>
                    </Link>
                }
                 { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-gray-700 text-gray-200 rounded-sm px-3 py-1 cursor-pointer hover:bg-gray-800 transition:all duration:200">
                            Sign up
                        </button>
                    </Link>
                }
                 {  isLoggedIn &&
                    <Link to="/">
                        <button className="bg-gray-700 text-gray-200 rounded-sm px-3 py-1 cursor-pointer hover:bg-gray-800 transition:all duration:200" onClick={()=>{
                            setIsLoggedIn(false)
                            toast.success("Logged Out")
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                 {  isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-gray-700 text-gray-200 rounded-sm px-3 py-1 cursor-pointer hover:bg-gray-800 transition:all duration:200">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}
export default Navbar