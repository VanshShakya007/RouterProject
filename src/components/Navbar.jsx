import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router";
import {toast} from "react-hot-toast"

function Navbar(props) {
    let isLoggedIn=props.isLoggedIn
    let setIsLoggedIn=props.setIsLoggedIn
    return (  
        //linking to the home page
        <div className="flex justify-evenly">

            <Link to="/">
                <img src={logo} akt="Logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className="flex flex-row gap-3">
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
            <div className="flex mx-5 gap-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                 { !isLoggedIn &&
                    <Link to="/signup">
                        <button >
                            Sign up
                        </button>
                    </Link>
                }
                 {  isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false)
                            toast.success("Logged Out")
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                 {  isLoggedIn &&
                    <Link to="/dashboard">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
    )
}
export default Navbar