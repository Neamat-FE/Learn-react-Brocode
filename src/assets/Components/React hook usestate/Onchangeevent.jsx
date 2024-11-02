import React, { useState } from "react";

function Onchangeevent() {
  const [name, setName] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [quantity, setQuantity] = useState(1);
  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  const [comment, setComment] = useState("");
  function handleCOmment(e) {
    setComment(e.target.value);
  }

  const [payment, setPayment] = useState("");
  function handlePayment(e) {
    setPayment(e.target.value);
  }

  const [shipping, setShipping] = useState("Delivery");
  function handleShipping(e) {
    setShipping(e.target.value);
  }

  return (
    <div className="container mt-4 mb-5 bg-info-subtle p-5">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Your Name"
      />
      <h3 className="mt-3">Name : {name}</h3>
      <input
        className="mt-4"
        type="number"
        value={quantity}
        onChange={handleQuantity}
        // disabled={quantity == 0 ? true : false}
      />
      <h3 className="mt-3">Quantity : {quantity}</h3>
      <textarea
        className="mt-5"
        name="text"
        id=""
        value={comment}
        onChange={handleCOmment}
        placeholder="Leave a comment here"
      ></textarea>
      <h3 className="mt-3">User Comment : {comment}</h3>
      <select className="mt-5" id="" value={payment} onChange={handlePayment}>
        <option value="">Select an Option</option>
        <option value="bKASH">bKASH</option>
        <option value="Nagad">Nagad</option>
        <option value="Rocket">Rocket</option>
      </select>
      <h3 className="mt-3">Selected Method : {payment}</h3>
      <label className="me-3">
        <input
          type="radio"
          value={"Pick up"}
          checked={shipping === "Pick up"}
          onChange={handleShipping}
        />
        Pick Up
      </label>{" "}
      <br />
      <label>
        <input
          type="radio"
          value={"Delivery"}
          checked={shipping === "Delivery"}
          onChange={handleShipping}
        />
        Delivery
      </label>
      <h3 className="mt-3">Shipping Method : {shipping}</h3>
    </div>
  );
}

export default Onchangeevent;
