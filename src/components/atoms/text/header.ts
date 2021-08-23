import styled from "styled-components";
import {
	typography,
	color,
	textStyle,
	TextStyleProps,
	TypographyProps,
	ColorProps,
} from "styled-system";

export const Header1 = styled.h1<TextStyleProps & TypographyProps & ColorProps>(
	textStyle,
	typography,
	color,
	`
font-size: 3em;
line-height: 1.2em;
font-weight: 400;
padding: 0;
margin: 0;

@media only screen and (max-width: 800px) {
	font-size: 1.5em;
	line-height: 1.5em;
}
`
);

export const Header2 = styled.h2<TextStyleProps & TypographyProps & ColorProps>(
	textStyle,
	typography,
	color,
	`
line-height: 1.2em;
font-size: 1.8em;
font-weight: 600;
color: #616161;
padding: 0;
margin: 0;

@media only screen and (max-width: 800px) {
	font-size: 1.2em;
}
`
);

export const Header3 = styled.h3<TextStyleProps & TypographyProps & ColorProps>(
	textStyle,
	typography,
	color,
	`
	font-size: 1.2em;
	line-height: 1em;
	font-weight: 400;
	text-indent: 0.3em;
	opacity: 0.8;
	padding: 0;
	margin: 0;



	@media only screen and (max-width: 800px) {
		font-size: 0.8em;
		text-indent: 0;
	}
`
);

export const Header4 = styled.h4<TextStyleProps & TypographyProps & ColorProps>(
	textStyle,
	typography,
	color,
	`
font-size: 1em;
line-height: 1.2em;
font-weight: 400;
padding: 0;
margin: 0;
font-weight: 600;
color: #757575;
`
);

export const Header5 = styled.h5<TextStyleProps & TypographyProps & ColorProps>(
	textStyle,
	typography,
	color,
	`
	font-size: 0.8em;
	line-height: 1em;
	font-weight: 400;

	opacity: 0.8;
	padding: 0;
	margin: 0;
`
);
