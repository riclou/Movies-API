import Banner from "components/Banner"
import Card from "components/Card"
import Title from "components/Title"
import Movies from "../../json/db.json"
import styles from "./start.module.css"

const Start = () => {

    return (
        <>
            <Banner image={"home"}/>
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {Movies.map((movies) => {
                    return <Card {...movies} key={movies.id}/>
                })}
            </section>            
        </>
    )
}

export default Start