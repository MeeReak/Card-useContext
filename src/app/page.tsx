"use client";

import ContextProvider, { MyContext } from "@/Utils/context";
import { CardList, FormAdd, FormUpdate, InputSearch, Modal } from "@/components";
import React from "react";

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
      <InputSearch/>
      <CardList />
      <Modal>{selectCard ? <FormUpdate /> : <FormAdd />}</Modal>
    </>
  );
}
