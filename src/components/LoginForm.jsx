import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event) {
        event.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged In")
        navigate("/dashboard")
    }
    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full mt-6">
            <label className="w-full">
                <p className="text-[1rem] text-gray-300 mb-1">
                    Email address <sup className="text-red-400 text-1xl">*</sup>
                </p>
                <input
                    className="w-full bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" value={formData.email}
                    onChange={changeHandler}
                    placeholder="Enter email id"
                    name="email" />
            </label>
            <br />

            <label className="w-full relative">
                <p className="text-[1rem] text-gray-300 mb-1">
                    Enter Password <sup className="text-red-400 text-1xl">*</sup>
                </p>
                <input
                    className="w-full bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter Password"
                    name="password" />


                <span className="text-gray-300 absolute cursor-pointer right-3 top-[48px]"
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>
                <Link to="#">
                    <p className="text-blue-300 text-sm ml-86">
                        Forgot Password</p></Link>
            </label>
            <button className="bg-yellow-500 p-2 text-gray-900 gap-2 cursor-pointer rounded-sm hover:bg-yellow-600 transition-all duration-200 mt-4 mb-5">
                Sign In
            </button>

        </form>
    )
}
export default LoginForm