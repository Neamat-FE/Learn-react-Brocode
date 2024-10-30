import React from "react";
import "./app.css";
import Array from "./assets/Components/Array";
import New from "./assets/Components/CSS Module/New";
import Student from "./assets/Components/Props/Student";
import List from "./assets/Components/List/List";
import Clickevents from "./assets/Components/Click events/Clickevents";

function App() {
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 45 },
    { name: "Orange", calories: 105 },
    { name: "Lemon", calories: 159 },
    { name: "Pine Apple", calories: 37 },
    { name: "Mango", calories: 35 },
  ];

  const vegetables = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 45 },
    { name: "Orange", calories: 105 },
    { name: "Lemon", calories: 159 },
    { name: "Pine Apple", calories: 37 },
    { name: "Mango", calories: 35 },
  ];

  return (
    <div>
      <Array />
      <New />
      <Student name="Neamat" age={30} roll={12} isStudent={true} />
      <Student name="Shuvon" age={28} roll={10} isStudent={false} />
      <Student />
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vagetables" />
      ) : null}
      ;
      <Clickevents />
    </div>
  );
}

export default App;
