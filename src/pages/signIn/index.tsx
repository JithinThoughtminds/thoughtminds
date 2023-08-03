import React from "react";
import Button from '../../components/button'
import { useNavigate } from "react-router-dom";

function SignIn(){

    let navigate = useNavigate()

    const signIn = () => {
        navigate('/chat')
    }

    return(
        <div>
            <h2>xccelerate</h2>
            <h4>2Xccelerate Digital Transformation using GenAI</h4>
            <Button type="primary" size="large" onClick={signIn}>Continue with Google</Button>
        </div>
    )
}

export default SignIn