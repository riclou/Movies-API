import Favorit from "Pages/Favorit"
import Start from "./Pages/Start"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Player from "Pages/Player"
import PagNotFound from "Pages/PagNotFound"
import StartBase from "Pages/StartBase"

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<StartBase/>}>
                    <Route index element={<Start/>}></Route>
                    <Route path="favoritos" element={<Favorit/>}></Route>
                    <Route path=":id" element={<Player/>}></Route>
                    <Route path="*" element={<PagNotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes