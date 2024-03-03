import { Dispatch, SetStateAction } from "react";

export interface ModalContextType {
  isShowModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
}
