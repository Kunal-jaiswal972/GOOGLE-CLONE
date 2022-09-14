import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Error from "./components/Error";
import Results from "./components/Results";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className="bg-white w-full h-[100vh] overflow-hidden flex flex-col items-center dark:bg-[#202124]">
            <NavBar />
            <Form />
            <Footer />
          </div>
        }
      />
      <Route exact path="/search" element={<Results />} />
      <Route exact path="/image" element={<Results />} />
      <Route exact path="/news" element={<Results />} />
      <Route exact path="/video" element={<Results />} />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
