import React, { useState } from "react";
import Layout from "../components/Layout";
import {supabase} from "../supabase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    // check mdn async function
    const handleSignIn = async (e) => {
        e.preventDefault(); 

        const {error} = await supabase.auth.signIn({email});

        if (error) {
            console.log(error);
        } else {    
            setMessage("Magic Link has been sent.")
        }
    }

    return (
        <Layout>
            {/* display message if we have a message */}
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