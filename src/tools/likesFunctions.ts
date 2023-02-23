import { rootStores } from "../Stores/main";

const { likeStore } = rootStores;

export const addLike = async (userId: string, postId: string) => {
  await likeStore.addLike(userId, postId);
};
