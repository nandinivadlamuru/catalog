import React from "react";
import Chart from "./chart";
import Price from "./price";
import Actions from "./actions";
import Menu from "./menu";
function App() {
  return (
    <div>
      <Price/>
      <Menu/>
      <Actions/>
      <Chart/>
    </div>
  );
}

export default App;
