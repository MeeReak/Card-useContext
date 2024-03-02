"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/localStorage";
import { UserContextType, UserForm, UserModel } from "@/@type/user";

export const MyContext = createContext<UserContextType>({
  info: [],
  key: "",
  selectCard: null,
  setKey: () => {},
  selectCardInfo: undefined,
  addInfo: () => {},
  updateInfo: () => {},
  deleteInfo: () => {},
  setSelectCard: () => {},
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [info, setInfo] = useState<UserModel[]>([]);

  const [selectCard, setSelectCard] = useState<string | null>(""); // store id card that selected

  const [key, setKey] = useState("");

  function addInfo(newInfo: UserForm) {
    const newId = Math.random().toString(36).substring(2, 8); // return 1f74e
    setInfo((pre) => {
      const newUser = [...pre, { ...newInfo, id: newId }];
      setLocalStorage("user", newUser);
      return newUser;
    });
  }

  function updateInfo(newInfo: UserForm) {
    const updatedList = info.map((item) => {
      if (item.id === selectCard) {
        return {
          ...item,
          ...newInfo,
        };
      }
      return item;
    });

    setLocalStorage("user", updatedList);
    setInfo(updatedList);
  }

  function deleteInfo(id: string) {
    const deleteUser = info.filter((item: any) => item.id !== id);

    setLocalStorage("user", deleteUser);
    setInfo(deleteUser);
  }

  useEffect(() => {
    const data = getLocalStorage("user") ? getLocalStorage("user") : [];
    setInfo(data);
  }, []);

  const contextValue = {
    info,
    setSelectCard,
    addInfo,
    selectCard,
    updateInfo,
    deleteInfo,
    key,
    setKey,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default ContextProvider;
