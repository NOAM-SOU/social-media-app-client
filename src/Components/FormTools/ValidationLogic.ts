import { SetStateAction } from "react";

export async function readerFile(
  e: React.ChangeEvent<HTMLInputElement>,
  set: any
) {
  const reader = new FileReader();
  reader.onload = async () => {
    if (reader.readyState === 2) {
      await set(reader.result);
    }
  };
  if (e.target.files) {
    await reader.readAsDataURL(e.target.files[0]);
  }
}

export async function imageHandler(image: File | Blob) {
  const formData = new FormData();
  const f = await formData.append("image", image);
  console.log(f);
  return f;
}

export const fileSelected = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFile: any
) => {
  if (e.target.files) {
    const file = e.target.files[0];
    setFile(file);
  }
};
