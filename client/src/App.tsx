import React from "react";
import Header from "./components/header";
import "./App.css";
import Container from "./components/container";
function App() {

  return (
    <div
      className="App bg-[#f4f4f4]  h-screen w-full flex items-center flex-col"
    >
    <Container />
    <div className="bg-blue-500 py-1 flex flex-col items-center justify-center w-full"><Header title="By Promise"></Header>
    <a href="https://github.com/Promiseejiro/File-Uploader" className="bg-[#fff] p-1 text-blue-500 rounded">Git repo</a>
    </div>

    </div>
  );
}
export default App;
