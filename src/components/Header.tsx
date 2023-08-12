import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <Nav />
      <div className="header">
        <div className="wrapper">
          <h1 className="title">Фото на документи</h1>
          <p className="description">
            Запечатліть стиль. Фото на документи з професіоналізмом та
            елегантністю
          </p>
        </div>
      </div>
    </>
  );
}
