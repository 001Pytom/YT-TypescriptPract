import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title={"Heading"} />
      <Section title={"Subheading Tilte"}>this is my section</Section>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
