import styled from "styled-components";
import {
	background,
	BackgroundProps,
	border,
	BorderProps,
	color,
	ColorProps,
	flexbox,
	FlexboxProps,
	layout,
	LayoutProps,
	shadow,
	ShadowProps,
	size,
	SizeProps,
	space,
	SpaceProps,
} from "styled-system";

export const Box = styled.div<
	FlexboxProps &
		SpaceProps &
		LayoutProps &
		SizeProps &
		ColorProps &
		BackgroundProps &
		ShadowProps &
		BorderProps
>(flexbox, space, layout, size, color, background, shadow, border);

Box.defaultProps = {
	display: "flex",
	flexDirection: "column",
};
