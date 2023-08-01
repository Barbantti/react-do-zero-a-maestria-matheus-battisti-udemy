import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';


function App() {


  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
