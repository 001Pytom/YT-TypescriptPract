import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
