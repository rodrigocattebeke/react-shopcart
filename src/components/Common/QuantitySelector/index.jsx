import { useState, useEffect } from "react";
import "./QuantitySelector.css";

export const QuantitySelector = ({ initialQuantity = 0, onQuantityChange }) => {
  const [inputValue, setInputValue] = useState(initialQuantity);

  const incrementOrDecrement = (action) => {
    if (/^\s*$/.test(inputValue) || inputValue < 1) return setInputValue(1);
    if (action == "decrement" && inputValue <= 1) return;

    if (action == "increment") {
      setInputValue(parseInt(inputValue) + 1);
    } else if (action == "decrement") {
      setInputValue(parseInt(inputValue) - 1);
    }
  };

  useEffect(() => {
    onQuantityChange(inputValue);
  }, [inputValue, onQuantityChange]);

  useEffect(() => {
    setInputValue(initialQuantity);
  }, [initialQuantity]);

  const handleChange = (e) => {
    if (/\D+/.test(e.target.value)) return;
    setInputValue(e.target.value);
  };

  return (
    <div className="shopCart-quantity">
      <button
        onClick={() => {
          incrementOrDecrement("decrement");
        }}
      >
        -
      </button>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button
        onClick={() => {
          incrementOrDecrement("increment");
        }}
      >
        +
      </button>
    </div>
  );
};
