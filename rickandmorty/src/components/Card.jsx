import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteFavorite, addFavorite } from "../redux/actions.js";

export function Card(props) {

   const [isFav, setIsFav] = React.useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.deleteFavorite(props.id);
      } else {
         setIsFav(true);
         props.addFavorite(props);
      }
   }

   React.useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props]);

   return (
      <div className={styles.rickCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={props.onClose} className={styles.close}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={styles.infoName}>{props.name}</h2>
         </Link>
         <h2 className={styles.infoSpecies}>Specie: {props.species}</h2>
         <h2 className={styles.infoGender}>Gender: {props.gender}</h2>
         <img src={props.image} alt="" className={styles.rickImg} />
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      deleteFavorite: (id) => dispatch(deleteFavorite(id)),
      addFavorite: (personaje) => dispatch(addFavorite(personaje)),
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
