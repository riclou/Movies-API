import Banner from "components/Banner"
import styles from "./Favorit.module.css"
import React from 'react'
import Title from "components/Title"
import { useFavoritContext } from "components/context/Favorit"
import Card from "components/Card"

function Favorit() {
    const {favorito} = useFavoritContext()

  return (
    <>
        <Banner image={"favoritos"}/>
        <Title>
            <h1>Meus favoritos</h1>
        </Title>
        <section className={styles.cards}>
          {favorito.map((fav) => {
              return <Card  {...fav} key={fav.id} />
          })}
        </section>
    </>
  )
}

export default Favorit