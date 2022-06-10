const imageHandler = (e, set) => {
  console.log(e.target.files[0].name);
  const reader = new FileReader();
  reader.onload = async () => {
    if (reader.readyState === 2) {
      await set(reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
};

export default imageHandler;
