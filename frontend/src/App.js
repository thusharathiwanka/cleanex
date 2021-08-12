import { BrowserRouter } from "react-router-dom";
import AOS from "aos";

import Routes from "./routes/Routes";

import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
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
