import React from 'react'
import styles from "./Card.module.css"
import favoritIcon from "./favorite.png"
import unFavorit from "./favorite_outline.png"
import { useFavoritContext } from 'components/context/Favorit'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  const {favorito, adicionarFavorito} = useFavoritContext()
  const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? favoritIcon : unFavorit;

  return (
    <div className={styles.container}>
        <Link className={styles.link} to={`/${id}`}>
          <img src={cover} alt={title} className={styles.cover} />
          <h2>{title}</h2>
        </Link>
        <img src={icone} alt='Icon Favorit' className={styles.fav} onClick={ () => {
          adicionarFavorito( {id, title, cover })
          }} />
    </div>
  )
}

export default Card