"use client";

import ContextProvider, { MyContext } from "@/context/context";
import {
  CardList,
  FormAdd,
  FormUpdate,
  InputSearch,
  Modal,
} from "@/components";
import React from "react";
import ModalProvider from "@/context/modalContext";

export default function Home() {
  return (
    <>
      <ContextProvider>
        <MyComponent />
      </ContextProvider>
    </>
  );
}

function MyComponent() {
  const { selectCard }: any = React.useContext(MyContext);

  return (
    <>
      <ModalProvider>
        <InputSearch />
        <CardList />
        <Modal>{selectCard ? <FormUpdate /> : <FormAdd />}</Modal>
      </ModalProvider>
    </>
  );
}
