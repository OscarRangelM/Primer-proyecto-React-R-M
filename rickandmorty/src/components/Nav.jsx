import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(props){ // Por medio de props podemos utilizar lo que recibimos 
    return (
        <div className= {styles.bar}>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            {/* <NavLink to="/detail">
                <button>Detail</button>
            </NavLink> */}
            <SearchBar onSearch= {props.onSearch} />
        </div>
    );
}
