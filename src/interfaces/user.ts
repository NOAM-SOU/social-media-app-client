export interface UserI {
  name?: string;
  email: string;
  password: string;
  biography?: string;
  profileImg?: any;
}

export interface UserInfo {
  name: string;
  email: string;
  id: string;
}

export interface UserProfile {
  name: string;
  email: string;
  biography: string;
  profileImg: any;
  comments: [];
  followed: [];
  followers: [];
  isActive: boolean;
  numberOfFollowed: number;
  numberOfFollowers: number;
  numberOfPosts: number;
  posts: [];
  savedPosts: [];
  _id: string;
}

biography: "None";
comments: [];
email: "lolo@gmail.com";
followed: [];
followers: [];
isActive: true;
name: "lolo";
numberOfFollowed: 0;
numberOfFollowers: 0;
numberOfPosts: 0;
password: "$2b$10$q799u9vyS2lZqBosYHVdzuW/EhFNZS4zDkuToaGw2yne0o39B7PKa";
posts: [];
profileImg: "16ea7a21ecf4e35dbc45f45878b0e7d3";
savedPosts: [];
__v: 0;
_id: "63ef4532735ed2b0fa06ac9a";
