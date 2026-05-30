import React, { useState } from "react";
import frameImage from "../assets/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"
import {FcGoogle} from "react-icons/fc"

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
    return (
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 justify-between gap-y-0">
            <div className="w-11/12 max-w-[450px]">

                <h1 className="text-white font-bold text-4xl">{title}</h1>

                <p className="text-[1.125rem] mt-4">
                    <span className="text-gray-200">{desc1}</span>
                    <br />
                    <span className="text-blue-300 italic">{desc2}</span>
                </p>

                {formType === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex flex-row w-full items-center gap-x-2">
                    <div className=" w-full h-[1px] bg-gray-800"></div>
                    <p className="text-gray-700 font-medium">OR</p>
                    <div className="h-[1px] w-full bg-gray-800"></div>
                </div>

                <button className="flex items-center flex-row mx-auto gap-4 rounded-sm border border-gray-800 p-34 py-3 mt-6 cursor-pointer hover:bg-gray-900">
                    <FcGoogle/>
                    <span className="text-gray-300 font-medium-bold">Sign up with Google</span>
                </button>
            </div>
            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading={"lazy"}/>
                 
                <img src={image}
                alt="Pattern"
                width={558}
                height={490}
                loading={"lazy"}
                className="absolute -top-4 right-4"/>
            </div>
        </div>

    )
}
export default Template