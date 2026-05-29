import React from "react";
import signupImg from "../assets/signup.png"; 
import Template from "../components/Template"; 
import { useState } from "react";
function Signup({ setIsLoggedIn }) { 
    return (
        <Template
            title="Join the millions learning to code with StudyMotion for free" 
            desc1="Build skills for today, tomorrow, and beyond"
            desc2="Education is future-proof your career."
            image={signupImg}
            formType="signup"
            setIsLoggedIn={setIsLoggedIn}
        />
    );
}

export default Signup;