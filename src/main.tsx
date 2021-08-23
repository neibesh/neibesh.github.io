import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { LandingPage } from "./pages/landing";
import { AppProviders } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppProviders>
			<LandingPage />
		</AppProviders>
	</React.StrictMode>
);
