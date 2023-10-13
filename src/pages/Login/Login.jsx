import { useAccessKey } from "../../utils/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const[username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setAccessKey } = useAccessKey();
    const navigate = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "1234") {
            setAccessKey("valid");
            navigate('/');
        } else {
            alert("Login mislykkes");
        }
    };

    return(
        <section style={{width: "1000px", margin: "auto"}}>
            <p>LOGIN</p>
            <form onSubmit={handelSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </section>
    )
}