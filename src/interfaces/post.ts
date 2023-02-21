export interface Post {
  _id?: string;
  title: string;
  content: string;
  img: string;
  userId?: string;
  comments?: string[];
  likes?: string[];
  savedBy?: string[];
  numberOfSave?: number;
  numberOfLikes?: number;
  numberOfComments?: number;
  createdAt?: Date;
}
