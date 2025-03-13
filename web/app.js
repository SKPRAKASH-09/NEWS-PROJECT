import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Example API
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 5))) // Get first 5 items
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <head>
        <button onclick = {() => setpage ("home")}>home</button>
        <button onclick = {() => setpage ("home")}>RESEARCH PAPER</button>
        <button onclick = {() => setpage ("home")}>EVENTS</button>
        <button onclick = {() => setpage ("home")}>PROFILE</button>

      </head>
    </div>
  );
}

export default App;
