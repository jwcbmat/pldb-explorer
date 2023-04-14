import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import axiosConfig from "./axiosConfig";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data");
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter os dados da API:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? <div>Loading...</div> : <Table data={data} />}
    </div>
  );
}

export default App;
