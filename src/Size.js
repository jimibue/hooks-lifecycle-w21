import useWindow from "./useWindow";

const Size = () => {
  const { width, height } = useWindow();
  return (
    <div>
      <h1>size</h1>
      <p>width: {width}</p>
    </div>
  );
};

export default Size;
