import styled from "styled-components";
import { color, typography } from "styled-system";

export const BodyText = styled.div(typography, color);

export const BodyTextSmall = styled.div(
	typography,
	color,
	`
text-align: left;
font-size: 0.7em;
font-weight: 600;
color: #616161;`
);

export const BodyTextLegal = styled.div(
	typography,
	color,
	`
padding: 16px;
text-align: center;
font-size: 0.8em;
color: #616161;
`
);
