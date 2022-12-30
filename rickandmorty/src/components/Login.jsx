import React from "react";
import { Link } from "react-router-dom";

export default function Login(){
    return (
        <div>
            <input></input>
            <Link to="./home">
                <button>To Home</button>
            </Link>
        </div>
    );
}