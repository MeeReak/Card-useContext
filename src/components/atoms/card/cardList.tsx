"use client";

import React, { useContext } from "react";
import { MyContext } from "@/context/context";
import Card from "./card";

const CardList = () => {
  const { info, key } = useContext(MyContext);

  return (
    <div className="flex items-center flex-col gap-2">
      {info
        .filter((item) => {
          return key.trim() === ""
            ? item
            : item.name.toLowerCase().includes(key.toLowerCase());
        })
        .map((item, index) => (
          <Card
            id={item.id}
            name={item.name}
            age={item.age}
            key={index}
            src={item.image || undefined}
          />
        ))}
    </div>
  );
};

export default CardList;
