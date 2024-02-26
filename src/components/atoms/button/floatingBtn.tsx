import React, { ReactNode } from "react";

interface FloatingBtn {
  className?: string;
  children: ReactNode;
  setIsShowModal: (value: boolean) => void;
}

const FloatingBtn: React.FC<FloatingBtn> = ({ children, setIsShowModal }) => {
  function setTrue() {
    setIsShowModal(true);
  }

  return (
    <button
      className=" fixed right-[10px] bottom-[10px] bg-pink-500 p-5 rounded-full"
      onClick={setTrue}
    >
      {children}
    </button>
  );
};

export default FloatingBtn;
