import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeComponent = (props) => {
    const [responseData, setResponseData] = useState([]);
    
    useEffect (() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((response) => {
            console.log(response.data.results);
            setResponseData(response.data.results);
            console.log(responseData)
        }
        )
        .catch((err) => console(err));
    }, [] )

    return(
        <div>
            <button>Fetch Pokemon</button>
            {responseData.map((pookemon, index) => {
                return(
                <div key={index}>
                    <p>{pookemon.name}</p>
                </div>
            )})}
        </div>
    )
}
export default PokeComponent;