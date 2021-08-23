import { Skill } from "../types/types";

import REACT_LOGO from "../images/chips/react.png";
import AWS_LOGO from "../images/chips/aws.png";
import NODEJS_LOGO from "../images/chips/nodejs.png";
import APPLE_LOGO from "../images/chips/apple.png";
import TS_LOGO from "../images/chips/ts.png";
import JS_LOGO from "../images/chips/js.png";
import ANDROID_LOGO from "../images/chips/android.png";
import GITHUB_LOGO from "../images/chips/github.png";
import HTML_LOGO from "../images/chips/html.png";
import JIRA_LOGO from "../images/chips/jira.png";
import LINUX_LOGO from "../images/chips/linux.png";
import PHP_LOGO from "../images/chips/php.png";
import LARAVEL_LOGO from "../images/chips/laravel.png";
import IONIC_LOGO from "../images/chips/ionic.png";
import JQUERY_LOGO from "../images/chips/jquery.png";
import ANGULAR_LOGO from "../images/chips/angular.png";
import C_LOGO from "../images/chips/c.png";
import JAVA_LOGO from "../images/chips/java.png";
import AGILE_LOGO from "../images/chips/agile.png";
import REDIS_LOGO from "../images/chips/redis.png";
import PG_LOGO from "../images/chips/pg.png";
import MYSQL_LOGO from "../images/chips/mysql.png";
import ARANGO_LOGO from "../images/chips/arango.png";
import CUST_LOGO from "../images/chips/cust.png";
import COMMS_LOGO from "../images/chips/comms.png";
import PM_LOGO from "../images/chips/pm.png";
import CICD_LOGO from "../images/chips/cicd.png";
import ARCH_LOGO from "../images/chips/arch.png";
import GCP_LOGO from "../images/chips/gcp.png";
import SPRING_LOGO from "../images/chips/spring.png";
import CCDB_LOGO from "../images/chips/ccdb.png";
import KAFKA_LOGO from "../images/chips/kafka.png";
import KUBE_LOGO from "../images/chips/kube.png";

export const SKILLS: { [name: string]: Skill } = {
	REACT_WEB: {
		id: "react-web",
		icon: REACT_LOGO,
		name: "React Web",
	},
	REACT_NATIVE: {
		id: "react-native",
		icon: REACT_LOGO,
		name: "React Native",
	},
	JQUERY: {
		id: "jquery",
		icon: JQUERY_LOGO,
		name: "JQuery",
	},
	AWS: {
		id: "aws",
		icon: AWS_LOGO,
		name: "Amazon Web Services",
	},
	C: {
		id: "c",
		icon: C_LOGO,
		name: "C",
	},
	JAVA: {
		id: "java",
		icon: JAVA_LOGO,
		name: "Java",
	},
	NODE: {
		id: "node",
		icon: NODEJS_LOGO,
		name: "NodeJS",
	},
	TYPESCRIPT: {
		id: "typescript",
		icon: TS_LOGO,
		name: "Typescript",
	},
	JAVASCRIPT: {
		id: "javascript",
		icon: JS_LOGO,
		name: "Javascript",
	},
	ANDROID: {
		id: "android",
		icon: ANDROID_LOGO,
		name: "Android Development",
	},
	IOS: {
		id: "ios",
		icon: APPLE_LOGO,
		name: "iOS Development",
	},
	PHP: {
		id: "php",
		icon: PHP_LOGO,
		name: "PHP",
	},
	LARAVEL: {
		id: "laravel",
		icon: LARAVEL_LOGO,
		name: "laravel",
	},
	WEB: {
		id: "web",
		icon: HTML_LOGO,
		name: "HTML/CSS",
	},
	GITHUB: {
		id: "github",
		icon: GITHUB_LOGO,
		name: "Github",
	},
	JIRA: {
		id: "jira",
		icon: JIRA_LOGO,
		name: "Jira",
	},
	CICD: {
		id: "cicd",
		icon: CICD_LOGO,
		name: "CI/CD",
	},
	AGILE: {
		id: "agile",
		icon: AGILE_LOGO,
		name: "Agile Development",
	},
	PM: {
		id: "pm",
		icon: PM_LOGO,
		name: "Project Management",
	},
	COMMS: {
		id: "comms",
		icon: COMMS_LOGO,
		name: "Communication Skills",
	},
	CUST: {
		id: "cust",
		icon: CUST_LOGO,
		name: "Customer Service",
	},
	ARCHITECTURE: {
		id: "architecture",
		icon: ARCH_LOGO,
		name: "System Architecture",
	},
	IONIC: {
		id: "ionic",
		icon: IONIC_LOGO,
		name: "Ionic Framework",
	},
	ANGULAR: {
		id: "angular",
		icon: ANGULAR_LOGO,
		name: "Angular",
	},
	APPLE: {
		id: "apple",
		icon: APPLE_LOGO,
		name: "Apple Systems",
	},
	LINUX: {
		id: "linux",
		icon: LINUX_LOGO,
		name: "Linux server management",
	},
	MYSQL: {
		id: "mysql",
		icon: MYSQL_LOGO,
		name: "MYSQL",
	},
	PG: {
		id: "pg",
		icon: PG_LOGO,
		name: "PostgreSQL",
	},
	ARANGO: {
		id: "arango",
		icon: ARANGO_LOGO,
		name: "ArangoDB",
	},
	REDIS: {
		id: "redis",
		icon: REDIS_LOGO,
		name: "Redis",
	},
	GCP: {
		id: "gcp",
		icon: GCP_LOGO,
		name: "Google Cloud",
	},
	SPRING: {
		id: "spring",
		icon: SPRING_LOGO,
		name: "Spring Boot",
	},
	CCDB: {
		id: "ccdb",
		icon: CCDB_LOGO,
		name: "Cockroach DB",
	},
	KAFKA: {
		id: "kafka",
		icon: KAFKA_LOGO,
		name: "Apache Kafka",
	},
	KUBE: {
		id: "kube",
		icon: KUBE_LOGO,
		name: "Kubernetes",
	},
};
