import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Products = () => {

  const { counter } = useCounterContext();


     // 5.1 - Context more complex
     const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Products value: {counter}</h1>
      <ChangeCounter />
    </div>
  );
};

export default Products;