import { useState } from "react";
import ListGroup from "./components/ListGroup";

import "./App.css";

function App() {
  const [selectIndex, setIndex] = useState(-1);

  const countries = ["United States", "Canada", "Nepal", "France", "Australia"];

  const highlightSelectedCountry = (index: number) => {
    setIndex(index);
    console.log(index);
    console.log("selected index");
    console.log(selectIndex);
  };

  return (
    <div className="App">
      <ListGroup items={countries} heading="Sanjay1" />
    </div>
  );
}

export default App;
