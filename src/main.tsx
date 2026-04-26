import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { getRootElement } from "./lib/dom";
import { LandingPage } from "./pages/landing";
import { AppProviders } from "./providers";

ReactDOM.createRoot(getRootElement()).render(
	<React.StrictMode>
		<AppProviders>
			<LandingPage />
		</AppProviders>
	</React.StrictMode>
);
