import React from "react";

interface InputForm {
  type: string;
  name: string;
  value: string;
  onHandChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputForm> = ({
  name,
  type,
  onHandChange,
  value,
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      className="w-full mt-1 p-2 border-b-2 text-black border-pink-300 focus:outline-none focus:border-pink-500"
      onChange={onHandChange}
    />
  );
};

export default InputForm;
