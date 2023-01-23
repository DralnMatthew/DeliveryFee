import React, {useState} from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import inputSchema from "./utils/inputSchema";
import calculateFee from "./utils/calculateFee";

export type ValuesProps = {
  [key: string]: any,
  value: string,
  distance: string,
  amount: string,
  time: string
}

const App = () => {
  const [values, setValues] = useState<ValuesProps>({
    value: "",
    distance: "",
    amount: "",
    time: "",
  });
  const [price, setPrice] = useState<number|null>(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPrice(calculateFee(values.value, values.distance, values.amount, values.time))
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Delivery Fee Calculator</h1>
        {inputSchema.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        {price && <div className="price">
          Delivery price: {Number(price).toFixed(2)} €
        </div>}
        <button id="calculate-button">Calculate</button>
      </form>
    </div>
  );
};

export default App;