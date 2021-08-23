import { ThemeProvider } from "styled-components";
import { APP_THEME } from "../theme";

export const AppProviders: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => <ThemeProvider theme={APP_THEME}>{children}</ThemeProvider>;
