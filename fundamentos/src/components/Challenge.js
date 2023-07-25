const Challenge = () => {
  let a = 10;
  let b = 29;
  const sum = () => {
    let x = 0;
    x = a + b;
    console.log(x);
  };
  return (
    <div>
      <button onClick={sum}>Calcule</button>
    </div>
  );
};

export default Challenge;