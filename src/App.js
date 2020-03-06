import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import axios from "axios";
import SearchBox from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      let data = await axios.get("http://jsonplaceholder.typicode.com/users");

      setMonsters(data.data);
    };

    fetchdata();
  }, []);

  const searchHandler = e => {
    setSearchInput(e.target.value);
  };

  const filteredMons = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <h1 className="title">Monstors</h1>
      <SearchBox placeholder="Robo Search" searchHandler={searchHandler} />
      <CardList monsters={filteredMons}></CardList>
    </div>
  );
}

export default App;
