import type { ComponentType, SVGProps } from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";

export type FeatherIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLinkItem = {
	id: string;
	name: string;
	url: string;
	Icon: FeatherIcon;
};

export const SOCIAL_LINKS: SocialLinkItem[] = [
	{
		id: "github",
		name: "GitHub",
		url: "https://github.com/neibesh",
		Icon: GitHub,
	},
	{
		id: "linkedin",
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/chris-neighbour-651b0a137",
		Icon: Linkedin,
	},
	{
		id: "twitter",
		name: "Twitter",
		url: "https://twitter.com/neibesh",
		Icon: Twitter,
	},
];
