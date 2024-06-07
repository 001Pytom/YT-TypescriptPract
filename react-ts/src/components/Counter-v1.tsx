type CounterProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ count, setCount }: CounterProps) => {
  return (
    <>
      <h1>count is {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
};

export default Counter;
