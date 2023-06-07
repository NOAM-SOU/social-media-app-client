import FormSignUp from "../../Components/SignUp/FormSignUp";
import { observer } from "mobx-react";
import "./SignUp.css";
import React from "react";

function SignUp() {
  return (
    <div className="social-signup-media">
      {/* <div className="signup-div-well">Wellcome to Dimelo</div> */}
      {/* <div className="social-signup-form-media"> */}
      <FormSignUp />
      {/* </div> */}
    </div>
  );
}

export default observer(SignUp);

// import React, { useState } from "react";
// import "./SignUp.css";

// interface SignUpFormProps {
//   onSubmit: (formData: SignUpFormData) => void;
// }

// interface SignUpFormData {
//   email: string;
//   password: string;
//   fullName: string;
//   profileImage: File | null;
// }

// const SignUp: React.FC<SignUpFormProps> = ({ onSubmit }) => {
//   const [formData, setFormData] = useState<SignUpFormData>({
//     email: "",
//     password: "",
//     fullName: "",
//     profileImage: null,
//   });

//   const handleInputChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ): void => {
//     const { files } = event.target;
//     if (files && files.length > 0) {
//       setFormData((prevState) => ({
//         ...prevState,
//         profileImage: files[0],
//       }));
//     }
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
//     event.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="email">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="fullName">Full Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="fullName"
//           name="fullName"
//           value={formData.fullName}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="profileImage">Profile Image</label>
//         <input
//           type="file"
//           className="form-control-file"
//           id="profileImage"
//           name="profileImage"
//           accept="image/*"
//           onChange={handleFileChange}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignUp;
