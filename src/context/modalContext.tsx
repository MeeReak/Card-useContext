import { ModalContextType } from "@/@type/modal";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext<ModalContextType>({
  isShowModal: false,
  setIsShowModal: () => {},
});

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const value = {
    isShowModal, setIsShowModal
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export function useModal() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
}

export default ModalProvider;
