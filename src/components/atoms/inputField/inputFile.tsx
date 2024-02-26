import React from "react";

interface InputFileProps {
  onHandChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
}

const InputFile: React.FC<InputFileProps> = ({ type, name, onHandChange }) => {
  return (
    <input
      type={type}
      id={name}
      className="w-full mt-1 p-2 border-2 text-pink-500 border-pink-300 rounded-md focus:outline-none focus:border-pink-500 bg-pink-100 "
      name={name}
      onChange={onHandChange}
    />
  );
};

export default InputFile;
