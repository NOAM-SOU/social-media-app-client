import { createContext, Dispatch, SetStateAction } from "react";

interface ContextType {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  like?: boolean;
  setLike?: Dispatch<SetStateAction<boolean>>;
}

export const IsLoading = createContext<ContextType>({
  isLoading: true,
  setIsLoading: () => {},
});
