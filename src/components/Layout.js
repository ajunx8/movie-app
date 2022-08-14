import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/sign-in"}>Sign In</Link></li>
            </header>

            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout; 