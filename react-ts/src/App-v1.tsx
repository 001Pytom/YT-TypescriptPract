import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Heading title={"Heading"} />
      <Section title={"Subheading Tilte"}>this is my section</Section>
      <Counter count={count} setCount={setCount} />
      <List
        items={["coffe", "Tacos", "Code"]}
        render={(item: string) => <span>{item}</span>}
      />
    </>
  );
}

export default App;
