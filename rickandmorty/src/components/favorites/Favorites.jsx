import React from "react";
import { connect } from "react-redux";
import Card from "../Card";
import styles from './favorites.module.css'

export function Favorites(props) {
    // const { characters } = props;
    return (
        <div className={styles.divFav}>
            {props.myFavorites.map((c) => {
                return (<Card
                    id={c.id}
                    name={c.name}
                    species={c.species}
                    gender={c.gender}
                    image={c.image}
                />)
            })}
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,
    }
}

export default connect(mapStateToProps)(Favorites);