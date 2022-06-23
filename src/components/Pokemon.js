import { useState } from "react";

const Pokemon = () => {
  const [userRequest, setUserRequest] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${userRequest}`)
    .then(res => res.json())
    .then(pokemon => setPokemon(pokemon));
    
    setUserRequest('')
  }

  const section = () =>{
    if(!pokemon){
      return <p>Use the search bar to find a pokemon</p>
    } else {
      return (
        <div className="pokemon">
          <p>Name: {pokemon.name}</p>
          <img src={pokemon.sprites.front_default} />
          <p>ID {pokemon.id}</p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Search for a Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userRequest} onChange={(e) => setUserRequest(e.target.value)}/>
        <input type="submit" />
      </form>
      {section()}
    </div>
  );
};

export default Pokemon;
