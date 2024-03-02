"use client";

import { MyContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

interface CardProp {
  id?: string;
  src?: string;
  alt?: string;
  name?: string;
  age?: string;
}

const Card: React.FC<CardProp> = ({
  id = "",
  src = "",
  name = "",
  age = "",
}) => {
  const { setSelectCard, selectCard, deleteInfo }= useContext(MyContext);

  return (
    <div
      onClick={() => {
        if (selectCard === id) {
          setSelectCard("");
        } else {
          setSelectCard(id);
        }
      }}
    >
      <div
        className={
          selectCard === id
            ? "border border-yellow-400 bg-yellow-100 rounded-md shadow-md "
            : "border border-pink-400 bg-pink-100 rounded-md shadow-md "
        }
      >
        <div className="relative space-x-2 flex items-center w-[400px] p-4">
          <Image
            className="rounded-full
            "
            src={src}
            alt={name}
            width={100}
            height={100}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteInfo(id);
            }}
            className="text-pink-500 hover:text-pink-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-0 right-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="space-y-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">Age: {age}</p>
            <button className="bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded-md  transition duration-300 ease-in-out">
              Preview{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
