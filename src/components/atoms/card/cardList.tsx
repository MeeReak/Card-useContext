"use client";

import React, { useContext } from "react";
import { MyContext } from "@/Utils/context";
import Card from "./card";



const CardList = () => {
  const { info, key }: any = useContext(MyContext);

  return (
    <div className="flex items-center flex-col gap-2">
      {key
        ? info
            .filter((item: Item) =>
              item.name.toLowerCase().includes(key.toLowerCase())
            )
            .map((item, index) => (
              <Card
                id={item.id}
                name={item.name}
                age={item.age}
                key={index}
                src={item.image}
              />
            ))
        : info.map((item, index) => (
            <Card
              id={item.id}
              name={item.name}
              age={item.age}
              key={index}
              src={item.image}
            />
          ))}
    </div>
  );
};

export default CardList;
