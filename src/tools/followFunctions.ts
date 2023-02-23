import { rootStores } from "../Stores/main";

const { followStore } = rootStores;

export const addFollow = async (userId: string, to: string) => {
  await followStore.addFollow(userId, to);
};
