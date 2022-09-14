import React from "react";
import axios from "axios";

const Search = (props) => {

    const {search, setSearch} = props;

    const onSubmitHandler = (e) => {
        // e.preventDefault();
        axios.get(`https://swapi.dev/api/${search.category}/${search.id}`)
            .then(response => {
                setSearch(response.data);
                console.log(response.data);
            })
            .catch(response => {
                setSearch({name: "Unknown"})
            });
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setSearch ({
            ...search,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="category">Search for:</label>
                <select onChange={onChangeHandler} name="category" value={search.category}>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="starships">Starships</option>
                    <option value="vehicles">vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
            </div>

            <div>
                <label htmlFor="id">ID: </label>
                <input onChange={onChangeHandler} type="number" name ="id" value={search.id}></input>
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    );
}

export default Search;