import React from "react";
import Button from '../../components/button';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';

function SignIn(){

    let navigate = useNavigate()

    const signIn = () => {
        navigate('/chat')
    }

    return(
        <div>
            <h2>xccelerate</h2>
            <h4>2Xccelerate Digital Transformation using GenAI</h4>
            <GoogleOAuthProvider clientId="892604533757-gg6eh038eorqrn05odabavp9l6ou49r9.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        if (credentialResponse.credential) {
                            let decoded = jwt_decode(credentialResponse.credential);
                            signIn()
                        } else {
                            console.log('Credential is undefined');
                        }
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </GoogleOAuthProvider>
            {/* <Button type="primary" size="large" onClick={signIn}>Continue with Google</Button> */}
        </div>
    )
}

export default SignIn