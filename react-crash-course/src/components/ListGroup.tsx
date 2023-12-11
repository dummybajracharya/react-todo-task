import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: Props) => {
  const [selectIndex, setIndex] = useState(-1);

  const highlightSelectedCountry = (index: number) => {
    setIndex(index);
    console.log(index);
    console.log("selected index");
    console.log(selectIndex);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <li> No Items </li>}
        {items.map((item, index) => (
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
};

export default ListGroup;
