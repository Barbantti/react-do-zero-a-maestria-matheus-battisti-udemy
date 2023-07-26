import "./App.css";
import MyComponent from "./Components/MyComponent";
import { useState } from "react";
import Title from "./Components/Title";

function App() {
  const n = 15;
  const [name] = useState("Heitor");

  const redTitle = true;

  return (
    <div className='App'>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo e do App.jsx</p>
      {/* inline CSS (NAO DEVE SER UTILIZADO!!! Apenas em situares especificas) */}
      <p
        style={{
          color: "blue",
          backgroundColor: "gray",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de foram inline
      </p>
      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Heitor" ? { color: "Blue" } : { color: "yellow" }}>
        {name}
      </h2>
      {/* classes dinâmicas no CSS */}
      <h2 className={redTitle ? "red-title"  : "title"}>Este titulo vai ter classe dinâmica</h2>
      {/* CSS Modules (MAIS UTILIZADO) */}
      <Title />
    </div>
  );
}

export default App;
