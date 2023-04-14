import React from "react";
import "./Header.css"; // Importando o arquivo de estilo

const Header = () => {
  return (
    <header className="header">
      <div className="logo"></div>
      <h1 className="title">Visualização de dados PLDB</h1>
      <a
        href="https://github.com/jwcbmat/pldb-explorer"
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        Veja o código em »
      </a>
    </header>
  );
};

export default Header;
