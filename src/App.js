import { useState, useEffect } from "react";
import "./App.css";
export default function App() {
  const [dataItem, setDataItem] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => response.json())
      .then((data) => setDataItem(data.results));
  }, []);
  console.log(dataItem);
  return (
    <div className='App'>
      <input placeholder='search'></input>
      <select name='type' id='type'>
        <option value='type'>type</option>
      </select>
      {dataItem.map((item, index) => {
        return (
          <div value={index}>
            <div className='CardMain'>
              <div className='name'> {item.name}</div>
              <div className='img-sec'>
                <img
                  src={
                    "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/" +
                    index +
                    ".svg"
                  }></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
