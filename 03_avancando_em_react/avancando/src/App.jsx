import "./App.css";

// importando imagem de assets

import City from "./assets/city.jpg";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className='App'>
      <h1>Avançando no React</h1>
      {/* Imagem em public */}
      <div>
        <p>Inserindo imagem pela pasta public</p>
        <img src='/img1.jpg' alt='Paisagem' />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt='Cidade' />
      </div>
      <ManageData />
    </div>
  );
}

export default App;