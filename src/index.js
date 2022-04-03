import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Header from "./components/Header";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
	}
	&#root {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
