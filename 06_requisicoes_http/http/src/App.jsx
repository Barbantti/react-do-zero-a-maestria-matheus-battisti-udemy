// React
import { useState /* useEffect */ } from "react";

// 4 - Custom hook
import { useFetch } from "./hooks/useFetch";

// loading svg img

import LoadingImg from "./assets/spinner.svg";

// Components

// Data

// Style
import "./App.css";

const url = "http://localhost:3000/products/";

function App() {
  //const [products, setProducts] = useState([]);

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  console.log(items);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1 - Rescuing data;
  /*   useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }
    fetchData();
  }, []); */

  // 2 - Adding products
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    /*     const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    // 3 - Dynamic loading

    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]); */

    // 5.2 - Refactoring POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };

  // 8.1 Delete
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Product list</h1>
      </div>

      {/* 6.2 Loading */}
      {loading && (
        <p>
          <img src={LoadingImg} alt='Loading data...' className='loading-svg' />
        </p>
      )}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - $: {product.price}
                <button
                  onClick={() => handleRemove(product.id)}
                  className='delete-button'
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Price :
            <input
              type='number'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          {loading ? (
            <button type='button' className='create-button' disabled>
              Wait
            </button>
          ) : (
            <input type='submit' className='create-button' value='Create' />
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
