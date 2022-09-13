import React, {useState, useEffect} from 'react';

const Pokemon = (props) => {
    const [poke, setPoke] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => response.json())
        .then(response => setPoke(response.results))
        }, [])

        return (
            <div>
                {poke.length > 0 && poke.map((pokemon, index)=>{
                return (<div key={index}>{pokemon.name}</div>)
            })}
            </div>
        )


}

export default Pokemon