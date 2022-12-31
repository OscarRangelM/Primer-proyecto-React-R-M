import React from "react";
import styles from "./Form.module.css";
import { Link } from "react-router-dom";
import { validation } from "./validation.js";

export default function Form(props) {

    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    });

    function HandleChange(e) {
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value
            })
        );
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        props.login(userData);
    }

    return (
        <div className={styles.divForm}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    name="username"
                    type=""
                    placeholder="Escribe tu username aqui..."
                    className={styles.inputEmail}
                    onChange={HandleChange}
                    value={userData.username}
                />
                <p>{errors.username && errors.username}</p>
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    type="password"
                    placeholder="Aqui va tu contraseña :)"
                    className={styles.inputPassword}
                    onChange={HandleChange}
                    value={userData.password}
                />
                <p>{errors.password && errors.password}</p>
                <Link to="./home">
                    <button type="submit" className={styles.buttonSubmit}>LOGIN</button>
                </Link>
            </form>
        </div>
    );
}