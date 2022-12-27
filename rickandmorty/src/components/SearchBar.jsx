import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [character, setCharacter]= useState('');

   function handleInput(event){  // Se llama asi normalmente
      setCharacter(event.target.value); // Tomamos el valor del input
   }
   return (
      <div className= {styles.divSearch}>
         <input type='search' className= {styles.inputSearch}  placeholder="type id" 
         onChange={(e)=> handleInput(e) } /*Este es el quue toma los valores del input*/ value={character} />
      <button onClick={()=> props.onSearch(character) } className= {styles.buttonSearch} >Agregar</button>
      </div>
   );
}
