import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { APP_THEME } from "../theme";

export type AppProvidersProps = {
	children?: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
	return <ThemeProvider theme={APP_THEME}>{children}</ThemeProvider>;
}
