"use client";

import { MyContext } from "@/context/context";
import { InputFile, InputForm } from "@/components/atoms";
import React, { useContext, useState } from "react";
import { userValidetion } from "@/schema/schema";
import * as Yup from "yup";

const FormUpdate = () => {
  const { updateInfo, info, selectCard } = useContext(MyContext);

  const updateCard = info.filter((item) => item.id === selectCard);

  const [user, setUser] = useState({
    id: updateCard[0].id,
    name: updateCard[0].name,
    age: updateCard[0].age,
    image: updateCard[0].image || "",
  });

  const [error, setError] = useState<{ [key: string]: string }>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const ImgUrl = URL.createObjectURL(e.target.files![0]);
    setUser({ ...user, image: ImgUrl });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await userValidetion.validate(user, { abortEarly: false });
      updateInfo(user);
    } catch (error) {
      console.log(error);
      if (error instanceof Yup.ValidationError) {
        const newErrors: { [key: string]: string } = {};
        error.inner.forEach((e) => {
          if (e.path) {
            newErrors[e.path] = e.message;
          }
        });
        setError(newErrors);
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
          <InputForm
            name="name"
            type="text"
            value={user.name}
            onHandChange={handleChange}
          />
          {error.name && <p className="text-red-500">{error.name}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-base font-semibold text-gray-700"
          >
            Age
          </label>
          <InputForm
            value={user.age}
            name="age"
            type="number"
            onHandChange={handleChange}
          />
          {error.age && <p className="text-red-500">{error.age}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-base font-semibold text-gray-700"
          >
            File
          </label>
          <InputFile name="image" type="file" onHandChange={handleFileChange} />
          {error.image && <p className="text-red-500">{error.image}</p>}
        </div>

        <button
          className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 focus:outline-none"
          type="submit"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default FormUpdate;
