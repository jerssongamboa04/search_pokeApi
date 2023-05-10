import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from "../../utilities/utilies";
import '../AboutPage/AboutPage.css'

const AboutPage = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        setPokemonData(res);
        console.log(res);
    });
}, [id]);

  if (!pokemonData) {
    return <div>Cargando...</div>;
  }

  const { id: pokemonId, name, sprites, abilities, moves } = pokemonData;

  return (
    <div className='container-card-pokemon'>
      <h1>{name}</h1>
      <img src={sprites.front_default} alt="" />
      <div className='container-component'>
      <h2>Habilidades:</h2>
      <ul className='ul-habilities'>
        {abilities.map((ability) => (
          <li className='li-habiliti' key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Movimientos:</h2>
      <ul>
        {moves.map((move) => (
          <li className='li-moves' key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default AboutPage;
