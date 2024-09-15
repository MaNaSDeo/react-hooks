import { useState } from "react";

function Contact() {
  console.log("Contact");
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState<number>(0);

  const incrementFunction = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h2>{count}</h2>
      <Contact />
      {/* <button type="button" onClick={() => setCount(count + 1)}> */}
      <button type="button" onClick={incrementFunction}>
        Increment Count
      </button>
    </div>
  );
}

export default App;
