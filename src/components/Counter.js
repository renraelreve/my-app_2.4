import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Counter() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, setPrice] = useState("2.99");

  const handlePlus = () => {
    function myFunc(prevCount) {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    }
    setCount(myFunc);
  };

  const handleMinus = () => {
    function myFunc(prevCount) {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      return count;
    }
    count > 0 && setCount(myFunc);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePriceChange = (price) => {
    setPrice(price);
  };

  return (
    <>
      <h2>{name}</h2>
      <Button label="-" onClick={handleMinus} />
      <span>{count}</span>
      <Button label="+" onClick={handlePlus} />
      <h2>{`$ ${price}`} each</h2>
      <h3>{`Discount: ${discount}%`}</h3>
      <Input value={name} label="Product" onChange={handleNameChange} />
      <Input value={price} label="Price Input" onChange={handlePriceChange} />

      <Button label="X" onClick={handleReset} />
    </>
  );
}
export default Counter;
