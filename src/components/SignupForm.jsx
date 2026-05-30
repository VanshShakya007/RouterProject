import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignupForm({ setIsLoggedIn }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

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
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match")
            return
        }
        setIsLoggedIn(true)
        toast.success("Account created")
        const accountData = {
            ...formData
        }
        const finalData={
    ...accountData,
    accountType
}  
       console.log("printing account data")
       console.log(accountData)
        navigate("/dashboard")
    }


    return (
        <div>
            <div className="flex bg-[#161D29] p-1 gap-x-1 rounded-full my-6 max-w-max border-b border-[#2C333F]">
                <button
                    type="button"
                    className={`${accountType === "student"
                        ? "bg-[#000814] text-white"
                        : "bg-transparent text-[#999DAA]"} py-2 px-5 rounded-full cursor-pointer transition-all duration-200 font-medium`}
                    onClick={() => setAccountType("student")}
                >
                    Student
                </button>

                <button
                    type="button"
                    className={`${accountType === "instructor"
                        ? "bg-[#000814] text-white"
                        : "bg-transparent text-[#999DAA]"} py-2 px-5 rounded-full cursor-pointer transition-all duration-200 font-medium`}
                    onClick={() => setAccountType("instructor")}
                >
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <div className="flex flex-row gap-4">


                    <label className="w-full mt-4">
                        <p className="text-[1rem] text-gray-300 mb-1">First Name <sup className="text-red-400 text-1xl">*</sup></p>
                        <input
                            className="w-full bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            value={formData.firstName} />
                    </label>

                    <label className="w-full mt-4">
                        <p className="text-[1rem] text-gray-300 mb-1">Last Name <sup className="text-red-400 text-1xl">*</sup></p>
                        <input
                            className="w-full bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            value={formData.lastName} />
                    </label>
                </div>

                <label className="w-full mt-4">
                    <p className="text-[1rem] text-gray-300 mb-1">Email Address <sup className="text-red-400 text-1xl">*</sup></p>
                    <input
                        className="w-full bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email} />
                </label>

                <div className="flex flex-row gap-4 mt-4">

                    <label className="relative">
                        <p className="text-[1rem] text-gray-300 mb-1">Create Password <sup className="text-red-400 text-1xl">*</sup></p>
                        <input
                            className="w-54 bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            value={formData.password} />

                        <span
                            className="text-gray-300 absolute cursor-pointer right-3 top-[48px]"
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>

                    <label className="relative">
                        <p className="text-[1rem] text-gray-300 mb-1">Confirm Password <sup className="text-red-400 text-1xl">*</sup></p>
                        <input
                            className="w-54 bg-[#161D29] text-[#F1F2FF] rounded-[0.5rem] p-[12px] border-b border-[#2C333F] outline-none placeholder:text-[#999DAA] mt-1" type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword} />

                        <span
                            className="text-gray-300 absolute cursor-pointer right-3 top-[50px]"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </label>
                </div>

                <button className="bg-yellow-500 p-2 text-black font-semibold gap-2 px-42 cursor-pointer rounded-sm hover:bg-yellow-600 transition-all duration-200 mt-8 mb-5">
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default SignupForm;