import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const About = () => {

  const { counter } = useCounterContext();

     // 5.1 - Context more complex
     const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About us</h1>
      <p>Product value: {counter}</p>
      <ChangeCounter />
      </div>
  );
};

export default About;