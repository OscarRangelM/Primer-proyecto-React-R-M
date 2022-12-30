import React from "react";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";

export default function Form() {

    const [userData, setUserData] = React.useState({
        username: '', 
        password: ''
    });

    const [errors, setErrors] = React.useState({
        username: '', 
        password: ''
    })

    function HandleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
        
    }

    return (
        <div>
            <form action="" className={styles.form}>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    type=""
                    placeholder="Escribe tu username aqui..."
                    className={styles.inputEmail}
                    onChange={HandleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Aqui va tu contraseña :)"
                    className={styles.inputPassword}
                    onChange={HandleChange}
                />
                <Link to="./home">
                    <button type="submit" >LOGIN</button>
                </Link>
            </form>
        </div>
    );
}