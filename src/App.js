import React from "react";
import { AppContext } from "./context/contextApi";
const App = () => {
  return (
    <AppContext>
      <div>
        <h1 className="text-4xl">Hello</h1>
      </div>
    </AppContext>
  );
};

export default App;
