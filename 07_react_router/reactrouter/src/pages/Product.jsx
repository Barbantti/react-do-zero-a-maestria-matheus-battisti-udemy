import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4.2 - Dynamic route
  const { id } = useParams();

  // 5 - Loading individual data
  const url = 'http://localhost:3000/products/' + id;
  const { data: product, loading, error } = useFetch(url);

  return <>
    <p>Product id: {id}</p>
    {error &&
      <p>An error has occurred</p>}
    {loading &&
      <p>Loading...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>$: {product.price}</p>
          {/* 6 - Nested routes */}
          <Link to={`/products/${product.id}/info`}>More information</Link>
        </div>
      )}
  </>
}

export default Product