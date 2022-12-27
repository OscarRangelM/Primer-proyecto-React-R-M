import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className= {styles.divSearch}>
         <input type='search' className= {styles.inputSearch} />
      <button onClick={()=> props.onSearch('Not found ID') } className= {styles.buttonSearch} >Agregar</button>
      </div>
   );
}
