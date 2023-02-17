import { FormEventHandler, useState } from "react";
import axios from "axios";

import React from "react";

function Upload() {
  async function postImage(image: File, description: string) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);
    console.log(formData);

    const result = await axios.post(
      "http://localhost:5000/upload/images",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);

    return result.data;
  }

  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const submit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (file) {
      await postImage(file, description);
    }
  };

  const fileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFile(file);
    }
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Upload;
