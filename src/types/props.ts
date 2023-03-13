import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { Post } from "../interfaces/post";

export type ChildrenProps = {
  children: ReactNode;
};

export type IdProps = {
  id: string;
};

export type StateProps = {
  state?: any;
  setState?: Dispatch<SetStateAction<any>>;
};

export type PostT = {
  post?: Post;
  key?: string;
};

export type PostProps = PostT & StateProps;

export type HeaderProps = IdProps & StateProps;

export type SearchProps = {
  value: StateProps;
  result: StateProps;
};
