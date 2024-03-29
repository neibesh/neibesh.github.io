import { SkilledEvent } from "../types/types";
import { SKILLS } from "./skills";
import POWR_LOGO from "../images/comp/powr.png";
import HIVE9_LOGO from "../images/comp/hive9.png";
import TMS_LOGO from "../images/comp/tms.png";
import APPLE_LOGO from "../images/comp/apple.png";

export const EMPLOYMENT_DATA: SkilledEvent[] = [
	{
		id: "pl",
		name: "PowerLedger",
		description: "Software Engineer",
		dates: "2021 - Present",
		icon: POWR_LOGO,
		skills: [
			SKILLS.REACT_WEB,
			SKILLS.TYPESCRIPT,
			SKILLS.GCP,
			SKILLS.AWS,
			SKILLS.JAVA,
			SKILLS.SPRING,
			SKILLS.WEB,
			SKILLS.ARCHITECTURE,
			SKILLS.CCDB,
			SKILLS.KAFKA,
			SKILLS.KUBE,
			SKILLS.CICD,
			SKILLS.GITHUB,
			SKILLS.JIRA,
			SKILLS.AGILE,
			SKILLS.PG,
		],
	},
	{
		id: "hive9",
		name: "Hive 9 Systems / EXTAG",
		description: "Software Engineer",
		dates: "2018 - 2021",
		icon: HIVE9_LOGO,
		skills: [
			SKILLS.REACT_WEB,
			SKILLS.AWS,
			SKILLS.NODE,
			SKILLS.TYPESCRIPT,
			SKILLS.ANDROID,
			SKILLS.IOS,
			SKILLS.WEB,
			SKILLS.ARCHITECTURE,
			SKILLS.IONIC,
			SKILLS.GITHUB,
			SKILLS.PM,
			SKILLS.JIRA,
			SKILLS.CICD,
			SKILLS.LINUX,
			SKILLS.AGILE,
			SKILLS.MYSQL,
			SKILLS.ARANGO,
			SKILLS.PG,
			SKILLS.REDIS,
		],
	},
	{
		id: "tms",
		name: "TrackMySubs",
		description: "Software Engineer",
		dates: "2017 - 2019",
		icon: TMS_LOGO,
		skills: [
			SKILLS.JQUERY,
			SKILLS.AWS,
			SKILLS.JAVASCRIPT,
			SKILLS.PHP,
			SKILLS.LARAVEL,
			SKILLS.WEB,
			SKILLS.JIRA,
			SKILLS.CUST,
			SKILLS.ANGULAR,
			SKILLS.MYSQL,
		],
	},
	{
		id: "apple",
		name: "Apple",
		description: "Technical Support (Genius)",
		dates: "2011 - 2018",
		icon: APPLE_LOGO,
		skills: [SKILLS.COMMS, SKILLS.CUST, SKILLS.APPLE],
	},
];
