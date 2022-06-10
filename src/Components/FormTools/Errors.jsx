export const AuthError = ({ status }) => {
  switch (status) {
    case 0:
      return null;
    case 1:
      return <div className="bt-login-error">User already exist</div>;
    case 2:
      return <div className="bt-login-error">User not found</div>;
    case 3:
      return <div className="bt-login-error">Wrong password</div>;
    default:
      return null;
  }
};

const PostError = ({ status }) => {
  switch (status) {
    case 0:
      return null;
    case 1:
      return <div className="bt-login-error">Post already saved</div>;
    default:
      return null;
  }
};

export default PostError;
