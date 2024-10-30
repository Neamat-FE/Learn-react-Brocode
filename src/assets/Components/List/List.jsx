import React from "react";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <h4 key={item}>
      {item.name} : <b className="text-success">{item.calories}</b>
    </h4>
  ));

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical sort
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //Reverse alphabetical sort
  //fruits.sort((a, b) => a.calories - b.calories);//Numeric
  //fruits.sort((a, b) => b.calories - a.calories);//Reverse Numeric

  //const lowcalFruits = fruits.filter((fruit) => fruit.calories >= 80);

  return (
    <div className="container mt-5">
      <h3>{category}</h3>
      <p>{listItems}</p>
    </div>
  );
}

export default List;
