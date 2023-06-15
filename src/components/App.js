import React, { useState } from "react";
import './../styles/App.css';
import Fetch from "./fetch.js";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Fetch/>
    </div>
  )
}

export default App