import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.rickCard}>
         <button onClick={props.onClose} className={styles.close}>X</button>
         <h2 className={styles.infoName}>{props.name}</h2>
         <h2 className={styles.infoSpecies}>Specie: {props.species}</h2>
         <h2 className={styles.infoGender}>Gender: {props.gender}</h2>
         <img  src={props.image} alt="" className={styles.rickImg} />
      </div>
   );
}
