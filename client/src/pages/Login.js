import React from "react";
import {useHistory} from "react-router-dom";
import Header from '../components/header/header.js';
import Footer from '../components/footer.js'





function Login() {
    let history = useHistory();
    
    return (
        <div>
            <Header />
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button onClick={() => {
                history.push('/CreateEvent.js');
            }}> Login </button>
            <Footer />
            

        </div>
    );
}
export default Login;