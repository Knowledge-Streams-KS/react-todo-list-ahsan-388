import { useState } from "react";
import "./Counter.css";

const Counter = (props) => {
  const x = 5;
  const [value, setValue] = useState(0);
  const [inputValue, setinputValue] = useState(0);

  const handleIncrement = (param) => {
    setValue(value + Number(param));
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - Number(inputValue));
    }
  };
  const handleinputchange = (event) => {
    const Num = event.target.value;
    setinputValue(Num);
  };

  return (
    <div className="items">
      <h1 className="h1"> {props.itemName} </h1>
      <h2 className={`${value > 0 ? "Heading" : "ZeroHeading"}`}>
        {value > 0 ? value : "Out of Stock"}
      </h2>

      <input
        type="number"
        placeholder="Enter Value"
        onChange={handleinputchange}
      />
      <button onClick={() => handleIncrement(inputValue)} className="button">
        {" "}
        ADD{" "}
      </button>
      {value > 0 ? (
        <button onClick={handleDecrement} className="button">
          {" "}
          SUB{" "}
        </button>
      ) : (
        <></>
      )}
      {/* {value > 0 && <button onClick={handleDecrement}> Decrement </button>} */}
    </div>
  );
};

export default Counter;
