import { useEffect, useState } from "react";
import axios from "axios";
import "./MainComponent.css";

const MainComponent = () => {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = async () => {
    const data = await axios.get("/api/value/all");
    console.log(data);
    setValues(data.data.rows.map((row) => row.number));
  };

  const saveNumber = async (e) => {
    e.preventDefault();
    await axios.post("/api/values", {
      value,
    });
    setValue("");
    getAllNumbers();
  };

  useEffect(() => {
    getAllNumbers();
  }, []);

  return (
    <div>
      <button onClick={getAllNumbers}>Get all numbers</button>
      <span className="title">Values</span>
      <div className="values">
        {values.map((value, index) => (
          <div className="value" key={index}>
            {value}
          </div>
        ))}
      </div>
      <form onSubmit={saveNumber} className="form">
        <label>Enter your value:</label>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MainComponent;
