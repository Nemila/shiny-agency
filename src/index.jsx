import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/index';
import Survey from './pages/Survey/Survey';
import Results from "./pages/Results/index";
import Freelances from "./pages/Freelances/index";
import Header from './components/Header/index';
import Error from "./components/Error/index.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	div {
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
	}
`

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="*" element={<Error />}/>
				<Route exact path="/" element={<Home />} />
				<Route path="/survey/:questionNumber" element={<Survey />} />
				<Route path="/results" element={<Results />}/>
				<Route path="/freelances" element={ <Freelances /> } />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
  document.getElementById('root')
);
