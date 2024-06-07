import { useCallback, useEffect, useMemo, useState } from "react";

interface User {
  id: number;
  username: string;
}
// fibbonacci ex, war in usememo so it desnt call it again
type fibFunc = (n: number) => number;
const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
const myNum: number = 37;

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log("mounting");
    console.log(users);
    // clean up func
    return () => console.log("unmounting");
  }, [users]);

  const handleAdd = useCallback(function handleAdd(): void {
    setCount((prev) => prev + 1);
  }, []);

  const result = useMemo(() => fib(myNum), []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>add</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
