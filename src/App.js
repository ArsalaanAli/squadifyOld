import React, { useEffect } from "react";

function App() {
  const result = "";
  useEffect(() => {
    fetch("/api")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data["title"]);
      });
  });
  return (
    <div>
      <h1>hello</h1>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
