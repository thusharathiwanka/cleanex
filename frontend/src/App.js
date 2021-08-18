import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import axios from "axios";

import Routes from "./routes/Routes";

import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	axios.defaults.baseURL = "http://localhost:5000/";

	useEffect(() => {
		AOS.init({ duration: 800, easing: "ease-in-out-quad" });
	});

	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
}

export default App;
