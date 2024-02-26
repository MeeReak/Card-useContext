"use client";

import { MyContext } from "@/Utils/context";
import { InputFile, InputForm } from "@/components/atoms";
import React, { use, useContext, useState } from "react";

const FormAdd = () => {
  const { addInfo }: any = useContext(MyContext);

  const [user, setUser] = useState({
    id: "",
    name: "",
    age: null,
    image: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const ImgUrl = URL.createObjectURL(e.target.files![0]);
    setUser((pre) => ({ ...pre, image: ImgUrl }));
  }

  return (
    <form
      onSubmit={(e) => {
        addInfo(e, user);
        console.log(user);
      }}
      className="absolute border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  p-8 rounded-lg shadow-lg"
    >
      <div className="w-64">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            Name
          </label>
          <InputForm name="name" type="text" onHandChange={handleChange} />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-base font-semibold text-gray-700"
          >
            Age
          </label>
          <InputForm name="age" type="number" onHandChange={handleChange} />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-base font-semibold text-gray-700"
          >
            File
          </label>
          <InputFile name="image" type="file" onHandChange={handleFileChange} />
        </div>

        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default FormAdd;
