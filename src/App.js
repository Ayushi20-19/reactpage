import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
const PokeListComp = React.lazy(() => import("./components/pokeListComp"));

function App() {
  const [pokiData, setPokiData] = useState([]);
  const [fil, setfil] = useState(pokiData);
  const [page, setPage] = useState(10);
  const [offset, setoffset] = useState(0);
  const API_LOAD = async () => {
    const PokemonData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${page}`
    );
    setPokiData(PokemonData.data.results);
    // console.log(PokemonData.data.results[0].url)
  };
  useEffect(() => {
    API_LOAD();
  }, [page]);

  const handleChange = (e) => {
    // const filtered = pokiData.filter((f) =>
    //   f.name.toLowerCase().includes(e.target.value.toLowerCase())
    // );

    setfil(e.target.value.toLowerCase());
    console.log(fil);
  };

  return (
    <div className='App'>
      <h1>Pokidex</h1>
      <div className='input-section'>
        <input
          className='input'
          onChange={handleChange}
          placeholder='Search by item name'
          type='search'
        />
        <select className='input-section' name='type' id='type'>
          <option className='input' value='type'>
            type
          </option>
        </select>
      </div>
      <Suspense fallback={<div style={{ color: "#fff" }}>Loading...</div>}>
        <PokeListComp poke={pokiData} />
        <div
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}>
          <Pagination
            count={3}
            color='primary'
            variant='outlined'
            style={{ color: "#fff", background: "#fff", marginTop: "2rem" }}
            onChange={(event, value) => {
              setPage(page + 10);
              setoffset(offset + 10);
            }}
          />
        </div>
      </Suspense>
      <footer className='footer'>
        <small>&copy; Pokidex {new Date().getFullYear()}</small>
      </footer>
    </div>
  );
}

export default App;
