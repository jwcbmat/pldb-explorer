import React from "react";
import "./Header.css";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">PLDB</h1>

      <Button label="Clique aqui" />
    </header>
  );
};

export default Header;
