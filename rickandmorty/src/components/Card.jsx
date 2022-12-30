import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div className={styles.rickCard}>
         <button onClick={props.onClose} className={styles.close}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.infoName}>{props.name}</h2>
         </Link>
         <h2 className={styles.infoSpecies}>Specie: {props.species}</h2>
         <h2 className={styles.infoGender}>Gender: {props.gender}</h2>
         <img  src={props.image} alt="" className={styles.rickImg} />
      </div>
   );
}
