import { SkilledEvent } from "../types/types";
import { SKILLS } from "./skills";
import CURTIN_LOGO from "../images/comp/curtin.png";

export const EDUCATION_DATA: SkilledEvent[] = [
	{
		id: "curtin",
		name: "Curtin University",
		description: "Bachelor Computer Science",
		dates: "2015 - 2018",
		icon: CURTIN_LOGO,
		skills: [
			SKILLS.C,
			SKILLS.JAVA,
			SKILLS.ANDROID,
			SKILLS.GITHUB,
			SKILLS.AGILE,
		],
	},
];
