import styles from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail (){

    const { detailId } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {  // Es un objeto con todas las propiedades del personaje.
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={styles.divDetail}>
            <div className={styles.txt}>
                <h1>{character.name}</h1>
                <h3>{character.status}</h3>
                <h3> {character.species} </h3>
                <h3>{character.gender}</h3>
                <h3>{character.origin?.name}</h3>
                {/* El simbolo ? dice que si el dato no llega no haga nada y que cuando llegue lo muestre, esto ayuda a que no se rompa el código. */}
            </div>
            <img src={character.image} alt={character.name} />
            <h1>Hola yo soy los detalles del personaje</h1>
        </div>
    );
}