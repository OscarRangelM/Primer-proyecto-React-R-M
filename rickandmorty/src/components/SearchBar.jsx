export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={()=> props.onSearch('Not found ID')}>Agregar</button>
      </div>
   );
}
