import { useState, useEffect } from "react";

const Berries = () => {
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState('');
  const [berry, setBerry] = useState()

  const handleSelection = (e) =>{
    const value = e.target.value;
    setSelection(value);
    
    const berryFound = results.find(result => result.name === value)

    fetch(berryFound.url)
    .then(res => res.json())
    .then(info => setBerry(info.firmness.name))
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/berry/")
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  }, []);

  return (
    <div>
      <h1>Select a Type</h1>
      <form>
      <select onChange={handleSelection}>
        <option value=""></option>
        {results.map((result) => {
          return <option value={result.name} key={result.name}>{result.name}</option>;
        })}
      </select>
      </form>
      <p>{selection}</p>
      <p>{berry}</p>
    </div>
  );
};

export default Berries;
