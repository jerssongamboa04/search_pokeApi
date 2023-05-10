import React, { useState, useEffect } from "react";
import "../Peticion/Peticion.css";
import { fetchData, promiseAll } from "../../utilities/utilies";
import { Link } from 'react-router-dom';




const Peticion = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData("https://pokeapi.co/api/v2/pokemon/?limit=151").then(async (res) => {
            const data = await promiseAll(res.results)
            setData(data)
            console.log(data);
        });
    }, []);

    if (!data) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="container-father">
            <h1>Lista de Pokémon</h1>
            <div className="container-pokemon">
                {data.map((pokemon, index) => (
                    <div className="container-info-pokemon" key={index}>
                        <p>{pokemon.id}</p>
                        <p>{pokemon.name}</p>
                        <img src={pokemon.sprites.front_default} alt="" />
                        <Link className="btn-ver" to={`/about/${pokemon.id}`}>Ver</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Peticion;
