import React from "react";
import { AuthErrorProps, PostErrorProps } from "../../interfaces/error";

export const AuthError: React.FC<AuthErrorProps> = ({ code, error }) => {
  switch (code) {
    case 0:
      return null;
    case 1:
      return <div className="bt-login-error">{error}</div>;
    case 2:
      return <div className="bt-login-error">{error}</div>;
    case 3:
      return <div className="bt-login-error">{error}</div>;
    default:
      return null;
  }
};

const PostError: React.FC<PostErrorProps> = ({ status, msg }) => {
  switch (status) {
    case 0:
      return null;
    case 1:
      return <div className="bt-login-error">{msg}</div>;
    default:
      return null;
  }
};

export default PostError;
