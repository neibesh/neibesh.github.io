import REACT_LOGO from "./img/react.png";
import AWS_LOGO from "./img/aws.png";
import NODEJS_LOGO from "./img/nodejs.png";
import APPLE_LOGO from "./img/apple.png";
import TS_LOGO from "./img/ts.png";
import JS_LOGO from "./img/js.png";
import ANDROID_LOGO from "./img/android.png";
import GITHUB_LOGO from "./img/github.png";
import HTML_LOGO from "./img/html.png";
import JIRA_LOGO from "./img/jira.png";
import LINUX_LOGO from "./img/linux.png";
import PHP_LOGO from "./img/php.png";
import LARAVEL_LOGO from "./img/laravel.png";
import IONIC_LOGO from "./img/ionic.png";
import JQUERY_LOGO from "./img/jquery.png";
import ANGULAR_LOGO from "./img/angular.png";
import C_LOGO from "./img/c.png";
import JAVA_LOGO from "./img/java.png";
import AGILE_LOGO from "./img/agile.png";
import REDIS_LOGO from "./img/redis.png";
import PG_LOGO from "./img/pg.png";
import MYSQL_LOGO from "./img/mysql.png";
import ARANGO_LOGO from "./img/arango.png";
import CUST_LOGO from "./img/cust.png";
import COMMS_LOGO from "./img/comms.png";
import PM_LOGO from "./img/pm.png";
import CIDI_LOGO from "./img/cidi.png";
import ARCH_LOGO from "./img/arch.png";

export interface Experience {
	icon: string;
	name: string;
}

export const EXPERIENCES: { [key: string]: Experience } = {
	REACT_WEB: {
		icon: REACT_LOGO,
		name: "React Web",
	},
	REACT_NATIVE: {
		icon: "",
		name: "React Native",
	},
	JQUERY: {
		icon: JQUERY_LOGO,
		name: "JQuery",
	},
	AWS: {
		icon: AWS_LOGO,
		name: "Amazon Web Services",
	},
	C: {
		icon: C_LOGO,
		name: "C",
	},
	JAVA: {
		icon: JAVA_LOGO,
		name: "Java",
	},
	NODE: {
		icon: NODEJS_LOGO,
		name: "NodeJS",
	},
	TYPESCRIPT: {
		icon: TS_LOGO,
		name: "Typescript",
	},
	JAVASCRIPT: {
		icon: JS_LOGO,
		name: "Javascript",
	},
	ANDROID: {
		icon: ANDROID_LOGO,
		name: "Android Development",
	},
	IOS: {
		icon: APPLE_LOGO,
		name: "iOS Development",
	},
	PHP: {
		icon: PHP_LOGO,
		name: "PHP",
	},
	LARAVEL: {
		icon: LARAVEL_LOGO,
		name: "laravel",
	},
	WEB: {
		icon: HTML_LOGO,
		name: "HTML/CSS",
	},
	GITHUB: {
		icon: GITHUB_LOGO,
		name: "Github",
	},
	JIRA: {
		icon: JIRA_LOGO,
		name: "Jira",
	},
	CIDI: {
		icon: CIDI_LOGO,
		name: "CI/DI",
	},
	AGILE: {
		icon: AGILE_LOGO,
		name: "Agile Development",
	},
	PM: {
		icon: PM_LOGO,
		name: "Project Management",
	},
	COMMS: {
		icon: COMMS_LOGO,
		name: "Communication Skills",
	},
	CUST: {
		icon: CUST_LOGO,
		name: "Customer Service",
	},
	ARCHITECTURE: {
		icon: ARCH_LOGO,
		name: "System Architecture",
	},
	IONIC: {
		icon: IONIC_LOGO,
		name: "Ionic Framework",
	},
	ANGULAR: {
		icon: ANGULAR_LOGO,
		name: "Angular",
	},
	APPLE: {
		icon: APPLE_LOGO,
		name: "Apple Systems",
	},
	LINUX: {
		icon: LINUX_LOGO,
		name: "Linux server management",
	},
	MYSQL: {
		icon: MYSQL_LOGO,
		name: "MYSQL",
	},
	PG: {
		icon: PG_LOGO,
		name: "PostgreSQL",
	},
	ARANGO: {
		icon: ARANGO_LOGO,
		name: "ArangoDB",
	},
	REDIS: {
		icon: REDIS_LOGO,
		name: "Redis",
	},
};
