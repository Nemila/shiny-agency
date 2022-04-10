import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Pages
import Home from "./pages/Home";
import Survey from "./pages/Survey/Survey";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

// Utils
import { theme, themeInverse } from "./utils/theme";

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

function App() {
  let dark = useState(false);
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark ? theme : themeInverse}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
