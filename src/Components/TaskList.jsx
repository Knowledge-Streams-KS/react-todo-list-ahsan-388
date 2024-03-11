import { useState } from "react";

const TaskList = () => {
  const [taskList, settaskList] = useState([]);
  const [inputValue, setinputValue] = useState(0);

  const handleClick = (param) => {
    settaskList([...taskList, inputValue]);
  };

  const handleinputchange = (event) => {
    const Num = event.target.value;
    setinputValue(Num);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Value"
        onChange={handleinputchange}
      />
      <button onClick={handleClick} className="button">
        ADD
      </button>

      <div>
        {taskList.map((ele, index) => {
          <p>{ele}</p>;
        })}
      </div>
    </>
  );
};

export default TaskList;
