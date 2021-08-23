import styled from "styled-components";
import {
	FlexboxProps,
	SpaceProps,
	LayoutProps,
	SizeProps,
	ColorProps,
	BackgroundProps,
	ShadowProps,
	BorderProps,
	flexbox,
	space,
	layout,
	size,
	color,
	background,
	shadow,
	border,
} from "styled-system";

export const Button = styled.a<
	FlexboxProps &
		SpaceProps &
		LayoutProps &
		SizeProps &
		ColorProps &
		BackgroundProps &
		ShadowProps &
		BorderProps
>(
	flexbox,
	space,
	layout,
	size,
	color,
	background,
	shadow,
	border,
	`
-webkit-appearance: none;
font-size: 0.8em;
font-weight: 600;
cursor: pointer;
text-decoration: none;

svg {
	height: 1.2em;
	width: 1.2em;
	margin-right: 0.4em;
}
`
);

Button.defaultProps = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "8px",
	color: "#fff",
	border: 0,
	px: "8",
	py: "4",
};
