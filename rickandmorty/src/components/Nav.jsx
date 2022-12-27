import React from 'react';
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';

export default function NavBar(props){ // Por medio de props podemos utilizar lo que recibimos 
    return (
        <div className= {styles.bar}>
            <SearchBar onSearch= {props.onSearch} />
        </div>
    );
}
