export interface Error {
  error: string;
  code: number;
}

export interface AuthErrorProps {
  error: string;
  code: number;
}

export interface PostErrorProps {
  status: number;
  msg: string;
}
