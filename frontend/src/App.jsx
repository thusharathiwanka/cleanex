import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import axios from "axios";

import Routes from "./routes/Routes";

import "./App.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";

function App() {
	axios.defaults.baseURL = "http://localhost:5000/";
	axios.defaults.withCredentials = true;

	useEffect(() => {
		AOS.init({ duration: 800, easing: "ease-in-out-quad" });
	});

	return (
		<AuthContextProvider>
			<CartContextProvider>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</CartContextProvider>
		</AuthContextProvider>
	);
}

export default App;
