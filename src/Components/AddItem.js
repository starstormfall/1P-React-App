import React, { useState } from "react";

function AddItem() {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue, i) => {
    const inputData = [...val];
    inputData[i] = onChangeValue.target.value;
    setVal(inputData);
  };
  console.log(val, "Data");
  return (
    <div>
      <button onClick={() => handleAdd()}>Add Item</button>
      {val.map((data, i) => {
        return (
          <div>
            <input onChange={(e) => handleChange(e, i)} />
          </div>
        );
      })}
    </div>
  );
}

export default AddItem;
