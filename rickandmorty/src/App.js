import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/Nav.jsx';
import { useState } from 'react';


function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`) // Pide el personaje con el id que ingresamos
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          let exist = characters.find((e)=> e.id === data.id); // De esta maner hacemos la comparación
          if(exist){ // Si el personaje se repite lo indicamos en un alert y si no continuamos con el proceso.
            alert(`Ese personaje ya esta en pantalla`)
          }else{
            setCharacters((oldChars) => [...oldChars, data]);
          }
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  function onClose(id){
    setCharacters((data)=>{
      return data.filter((e)=> e.id !== id);
    } )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} />
      <div className='container'>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App
