//LOGIN VIRKER MEN MAN KAN IKKE REDIGERE NOGET

import { useAccessKey } from "../../utils/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.scss"

export const Login = () => {

    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAccessKey } = useAccessKey();
    const navigate = useNavigate();
    
    //Undersøger om brugernavn og password er korrekt og sender hhv en til forsiden eller viser en alert med error
    const handelSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "1234") {
            setAccessKey("valid");
            navigate('/');
        } else {
            alert("Login mislykkes");
        }
    };

    //retunere form med login-siden
    return(
        <section className={style.login}>
            <h2>LOGIN</h2>
            <form onSubmit={handelSubmit}>
                <label htmlFor="name">Brugernavn:</label>
                <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}