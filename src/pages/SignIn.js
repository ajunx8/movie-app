import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../auth";

const SignIn = () => {
    const auth = useAuth()
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    // check mdn async function
    const handleSignIn = async (e) => {
        e.preventDefault(); 

        const signIn = await auth.login(email);
        // console.log(signIn);

        if (signIn.error) {
            setMessage(signIn.error.message)
        } else {
            setMessage("Login link has been sent.")
        }

        setEmail("")
    }

    return (
        <Layout>
            {message && message}
            <h1>Sign In</h1>
            <form onSubmit={handleSignIn}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type={"Submit"}>Sign In</button>            
            </form>
        </Layout>
    );
};

export default SignIn; 

//  {/* display message if we have a message */}