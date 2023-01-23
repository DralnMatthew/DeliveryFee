import {ChangeEventHandler} from "react";
import "./formInput.css";

type FormInputProps = {
    id: string,
    name: string,
    type: string,
    placeholder?: string,
    errorMessage?: string,
    label: string,
    pattern?: string,
    required: boolean,
    onChange: ChangeEventHandler<HTMLInputElement> | undefined,
    value: string,
};

const FormInput = (props:FormInputProps) => {
  const { label, errorMessage, onChange, ...inputProps } = props;

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
      />
      <span>{errorMessage}</span>
    </div>
  );
};


export default FormInput;
