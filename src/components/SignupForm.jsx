import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignupForm({setIsLoggedIn}) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match")
            return
        }
        setIsLoggedIn(true)
        toast.success("Account created")
        const accountData={
            ...formData
        }
        navigate("/dashboard")
    }

    return (
        <div>
            <div>
                <button>
                    Student
                </button>
                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name="firstName"
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        value={formData.firstName} />
                </label>

                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input
                        required
                        type="text"
                        name="lastName"
                        onChange={changeHandler}
                        placeholder="Enter first name"
                        value={formData.lastName} />
                </label>


                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address"
                        value={formData.email} />
                </label>


                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password} />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>



                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword} />

                    <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                    </span>
                </label>
                <button>
                    Create Account
                </button>
            </form>
        </div>
    )
}
export default SignupForm