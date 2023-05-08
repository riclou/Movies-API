import Card from "components/Card";
import { createContext, useState, useContext } from "react";

export const FavoritContext = createContext()
FavoritContext.displayName = "Favoritos"

export default function FavoritProvider( {children} ){
    const [favorito, setFavorito] = useState([])

    return(
        <FavoritContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritContext.Provider>
    )
}

export function useFavoritContext(){
    const { favorito, setFavorito } = useContext(FavoritContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.slice(novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id));
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}