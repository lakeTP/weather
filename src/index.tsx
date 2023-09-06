import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	</Provider>
);
