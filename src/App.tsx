import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content"></div>
      <Map />
      <div className="footer">
        <div className="container">
          <div className="footer-info">
            <h3 className="title-3">Наші контакти</h3>
            <ul className="contacts-list">
              <li>
                <a href="tel:+48693781246">+48693781246</a>
              </li>
              <li>
                <a href="mailto: dokument.foto.studio@gmail.com">
                  dokument.foto.studio@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-info">
            <h3 className="title-3">Наші контакти</h3>
            <ul className="contacts-list">
              <li>
                <a href="tel:+48693781246">+48693781246</a>
              </li>
              <li>
                <a href="mailto: dokument.foto.studio@gmail.com">
                  dokument.foto.studio@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
<div className="footer">
  <div className="container">
    <div>
      <h3>Наші контакти</h3>
      <ul>
        <li>
          <a href="tel:+48693781246">+48693781246</a>
        </li>
        <li>
          <a href="mailto: dokument.foto.studio@gmail.com">
            dokument.foto.studio@gmail.com
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>;
