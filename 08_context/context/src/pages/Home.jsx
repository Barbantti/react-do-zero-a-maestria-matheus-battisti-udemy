// import { useContext } from "react";
// import { CounterContext } from '../context/CounterContext';
import ChangeCounter from "../components/ChangeCounter";

// 4 - Refactoring with hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context more complex
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

    // 5.1 - Context more complex
  const { color, dispatch } = useTitleColorContext();

  console.log("Color: ", color);

  // 6 - Changing complex state
const setTitleColor = (color) => {
  dispatch({ type: color });
};

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Counter value: {counter}</p>
      {/* 3.1 - changing context value */}
      <ChangeCounter />
      {/* 6.1 - Changing complex context */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Red</button>
        <button onClick={() => setTitleColor("BLUE")}>Blue</button>
      </div>
    </div>
  )
}

export default Home;