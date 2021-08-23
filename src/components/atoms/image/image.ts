import styled from "styled-components";
import {
	BackgroundProps,
	BorderProps,
	ColorProps,
	LayoutProps,
	ShadowProps,
	SizeProps,
	SpaceProps,
	background,
	border,
	color,
	layout,
	shadow,
	size,
	space,
} from "styled-system";

export const Image = styled.img<
	SpaceProps &
		LayoutProps &
		SizeProps &
		ColorProps &
		BackgroundProps &
		ShadowProps &
		BorderProps
>(space, layout, size, color, background, shadow, border);
