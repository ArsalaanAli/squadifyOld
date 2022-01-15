import React, { useEffect } from "react";

function App() {
  const result = "asd";
  useEffect(() => {
    fetch("/").then((resp) =>
      resp.json().then((data) => {
        console.log(data);
      })
    );
  });
  return (
    <div>
      <h1>hello</h1>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
