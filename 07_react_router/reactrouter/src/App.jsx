import './App.css'

// 1 - Cfg react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


function App() {

  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2.1 - Links with react router */}
        <Navbar />
        {/* 9 - Search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Dynamic route */}
          <Route path='/products/:id' element={<Product />} />
          {/* 6.1 - Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* 9 - Search */}
          <Route path='/search' element={<Search />} />
          {/* 10 - Redirect */}
          <Route path='/company' element={<Navigate to="/about" />} />
          {/* 7 - No match found */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
