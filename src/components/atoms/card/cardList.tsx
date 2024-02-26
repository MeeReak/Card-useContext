"use client";

import React, { useContext } from "react";
import { MyContext } from "@/Utils/context";
import Card from "./card";

const CardList = () => {
  const { info }: any = useContext(MyContext);

  return (
    <div className="flex items-center flex-col gap-2">
      {info.map((item: any, index: number) => (
        <Card
          id={item.id}
          age={item.age}
          name={item.name}
          key={index}
          alt={item.name}
          src={item.image}
        />
      ))}
    </div>
  );
};

export default CardList;
