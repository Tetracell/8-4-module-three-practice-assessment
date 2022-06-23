import { useState } from "react";

const Pokemon = () => {
  const [userRequest, setUserRequest] = useState("");
  const [pokemon, setPokemon] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.value;
    console.log(e.target.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => res.json())
    .then(pokemon => setPokemon(pokemon))
    // console.log(pokemon)
  }
  

  return (
    <div>
      <h1>Search for a Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userRequest} onChange={(e) => setUserRequest(e.target.value)}/>
        <input type="submit" />
      </form>
      <p>Use the search bar to find a pokemon</p>
    </div>
  );
};

export default Pokemon;
