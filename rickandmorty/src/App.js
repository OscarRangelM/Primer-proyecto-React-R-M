import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/Nav.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from './components/Form.jsx';
import Favorites from './components/favorites/Favorites.jsx'


function App() {

  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`) // Pide el personaje con el id que ingresamos
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id); // De esta maner hacemos la comparación
          if (exist) { // Si el personaje se repite lo indicamos en un alert y si no continuamos con el proceso.
            alert(`Ese personaje ya esta en pantalla`)
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id);
    })
  }

  let location = useLocation();

  const [access, setAccess] = useState(false);
  const username = "oscar@algo.com";
  const password = "Password01";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
      // alert("Funciona...");
    }
  }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? null : <NavBar onSearch={onSearch} />}
      {/* Usamos un ternario para que cuando estemos en el login no se vea el navBar */}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorites" element = {<Favorites characters={characters} />} />
        <Route path="/detail/:detailId" element={<Detail />}></Route>
      </Routes>
    </div>
  )
}

export default App
