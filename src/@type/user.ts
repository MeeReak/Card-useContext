import { Dispatch, SetStateAction } from "react";

export interface UserModel {
  readonly id: string;
  name: string;
  age: string;
  image: string | null;
}

export interface UserContextType {
  info: UserModel[];
  key: string;
  setKey: Dispatch<SetStateAction<string>>;
  selectCard: string | null;
  selectCardInfo: UserModel | undefined;
  addInfo: (user: UserForm) => void;
  updateInfo: (newUpdateUser: UserForm) => void;
  deleteInfo: (id: string) => void;
  setSelectCard: Dispatch<SetStateAction<string | null>>;
}

export type UserForm = Omit<UserModel, "id">;
