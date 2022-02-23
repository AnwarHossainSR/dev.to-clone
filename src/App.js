import React from "react";
import "./App.scss";
import Content from "./components/Content";
import LeftSidebar from "./components/LeftSidebar";
import Navigation from "./components/Navigation";
import RightSidebar from "./components/RIghtSidebar";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main-container">
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
};

export default App;
