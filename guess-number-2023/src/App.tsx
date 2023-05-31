import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GuessTable } from "./components/guessTable";
import { GuessResult, verifyGuess } from "./utils/utils";

function App() {
  return (
    <div className="App">
      <GuessTable />
    </div>
  );
}

export default App;
