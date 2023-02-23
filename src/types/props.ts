import React, { Dispatch, ReactNode, SetStateAction } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type IdProps = {
  id: string;
};

export type StateProps = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export type HeaderProps = IdProps & StateProps;
