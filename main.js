import React, { useState } from "react";

function App() {
  const [highestYield, setHighestYield] = useState(null);

  const fetchHighestYield = async () => {
    const res = await fetch("http://localhost:3000/highest-yield");
    const data = await res.text();
    setHighestYield(data);
  };

  return (
    <div>
      <h1>Yield Aggregator</h1>
      <button onClick={fetchHighestYield}>Get Highest Yield</button>
      <h2>{highestYield}</h2>
    </div>
  );
}

export default App;
