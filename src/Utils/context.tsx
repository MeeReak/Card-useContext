"use client";

import React, { ReactNode, createContext, useState } from "react";

export const MyContext = createContext([]);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [info, setInfo] = useState([
    {
      id: "1",
      name: "Kaneki Ken",
      age: 25,
      image: "/Tokyo.jpg",
    },
    {
      id: "2",
      name: "L Lawliet",
      age: 25,
      image: "/L.jpg",
    },
    {
      id: "3",
      name: "Obito Uchiha",
      age: 25,
      image: "/obito.png",
    },
  ]);

  const [selectCard, setSelectCard] = useState(""); // store id card that selected

  function addInfo(e: { preventDefault: () => void }, newInfo: any) {
    e.preventDefault();
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
    setInfo([...info, { ...newInfo, id: newId }]);
  }

  function updateInfo(e: { preventDefault: () => void }, newInfo: any) {
    e.preventDefault();
    setInfo((preList: any) => {
      const updatedList = preList.map((item: any) => {
        if (item.id === selectCard) {
          return {
            ...item,
            ...newInfo,
          };
        }
        return item;
      });
      return updatedList;
    });
  }

  function deleteInfo(id: string) {
    setInfo((preList: any) => {
      const updatedList = preList.filter((item: any) => item.id !== id);
      return updatedList;
    });
  }

  const contextValue = {
    info,
    setSelectCard,
    addInfo,
    selectCard,
    updateInfo,
    deleteInfo,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
