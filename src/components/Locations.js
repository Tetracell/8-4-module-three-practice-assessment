import { useEffect, useState } from "react";

const Locations = () => {
  const [visible, setVisible] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location")
      .then((res) => res.json())
      .then((json) => setLocations(json.results));
  }, []);

  return (
    <div>
      <h1>List of Locations</h1>
      <button type="button" onClick={() => !visible ? setVisible(true) : setVisible(false)}>
        {!visible ? 'Show Locations' : 'Hide Locations'}
      </button>
      {visible ? locations.map(location => {
        return (
            <ul>
                <li key={location.name}>{location.name}</li>
            </ul>
        )
      }) : null} 
    </div>
  );
};

export default Locations;
