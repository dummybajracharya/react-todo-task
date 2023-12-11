import { useState } from "react";
import "./App.css";

function App() {
  const [selectIndex, setIndex] = useState(-1);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "France",
    "Australia",
  ];

  const highlightSelectedCountry = (index: number) => {
    setIndex(index);
    console.log(index);
    console.log("selected index");
    console.log(selectIndex);
  };

  return (
    <div className="App">
      <h2> Countries </h2>
      <ul className="list-group">
        {countries.map((item, index) => (
          <li
            key={item}
            className={
              index == selectIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => highlightSelectedCountry(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
