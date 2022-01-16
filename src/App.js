import React, { useEffect, useState } from "react";
import FrontPage from "./Pages/FrontPage";
function App() {
  const [result, setResult] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data["title"]);
        setResult(data["title"]);
      });
  });
  return (
    <div>
      <FrontPage />
    </div>
  );
}

export default App;
