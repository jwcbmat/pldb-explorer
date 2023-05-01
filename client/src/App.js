import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import SearchBar from "./components/SearchBar/SearchBar";

import "./axiosConfig"; // eslint-disable-line no-unused-vars

import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao obter os dados da API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    if (!data) return;
    const filter = Object.values(data).filter(
      (item) =>
        item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
        -1
    );
    setFilteredData(filter);
  };

  const tableData =
    filteredData.length > 0 ? filteredData : Object.values(data);

  return (
    <div className="app">
      <Header />
      <div className="bodyBox">
        {loading ? (
          <div>Buscando...</div>
        ) : (
          <>
            <div className="filterBox">
              <SearchBar onChange={handleFilterChange} />
            </div>
            <Table data={tableData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
