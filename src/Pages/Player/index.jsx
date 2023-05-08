import Banner from "components/Banner"
import Movies from "../../json/db.json"
import React from 'react'
import Title from "components/Title"
import { useParams } from "react-router-dom"
import PagNotFound from "Pages/PagNotFound"
import "./Player.module.css"

function Player() {
    const param = useParams()
    const video = Movies.find((videos) => {
        return videos.id === Number(param.id)
    })

    if(!video){
        return <PagNotFound/>
    }

  return (
    <div>
        <Banner image={"player"} />
        <Title>
            <h2>Player</h2>
        </Title>
        <iframe
        src={video.link} 
        title={video.title} 
        ></iframe>
    </div>
  )
}

export default Player