import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(props) { // Por medio de props podemos utilizar lo que recibimos 
    return (
        <div className={styles.bar}>
            <div>
                <NavLink to="/home">
                    <button className={styles.buttonHome}>Home</button>
                </NavLink>
                <NavLink to="/about">
                    <button className={styles.buttonAbout}>About</button>
                </NavLink>
                <NavLink to='/favorites' >
                    <button className={styles.buttonAbout}>Favorites</button>
                </NavLink>
            </div>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}
