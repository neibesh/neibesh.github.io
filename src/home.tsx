import React from "react";
import { PageHeader } from "./components/page-header";
import { Block, Copyright, Header } from "./components/ui";
import { HorizontalTiles, Tile } from "./components/horizontal-tiles";
import TMS_LOGO from "./img/tms.png";
import APPLE_LOGO from "./img/apple.png";
import CURTIN_LOGO from "./img/curtin.png";
import HIVE9_LOGO from "./img/hive9.png";
import PF_IMAGE from "./img/pf.png";
import "./home.module.scss";
import { Milestone } from "./components/milestone";
import { EXPERIENCES } from "./experiences";

function Home() {
	return (
		<>
			<PageHeader />
			<Block>
				<Header>Employment</Header>
				<Milestone
				icon={HIVE9_LOGO}
					pre="2018 - Present"
					name="Hive 9 Systems / EXTAG"
					sub="Software Engineer"
					experiences={[
						EXPERIENCES.REACT_WEB,
						EXPERIENCES.AWS,
						EXPERIENCES.NODE,
						EXPERIENCES.TYPESCRIPT,
						EXPERIENCES.ANDROID,
						EXPERIENCES.IOS,
						EXPERIENCES.WEB,
						EXPERIENCES.ARCHITECTURE,
						EXPERIENCES.IONIC,
						EXPERIENCES.GITHUB,
						EXPERIENCES.PM,
						EXPERIENCES.JIRA,
						EXPERIENCES.CIDI,
						EXPERIENCES.LINUX,
						EXPERIENCES.AGILE,
						EXPERIENCES.MYSQL,
						EXPERIENCES.ARANGO,
						EXPERIENCES.PG,
						EXPERIENCES.REDIS,
					]}
				/>
				<Milestone
					icon={TMS_LOGO}
					pre="2017 - 2019"
					name="Trackmysubs"
					sub="Software Engineer"
					experiences={[
						EXPERIENCES.JQUERY,
						EXPERIENCES.AWS,
						EXPERIENCES.JAVASCRIPT,
						EXPERIENCES.PHP,
						EXPERIENCES.LARAVEL,
						EXPERIENCES.WEB,
						EXPERIENCES.JIRA,
						EXPERIENCES.CUST,
						EXPERIENCES.ANGULAR,
						EXPERIENCES.MYSQL,
					]}
				/>
				<Milestone
					icon={APPLE_LOGO}
					pre="2011 - 2018"
					name="Apple"
					sub="Technical Support (Genius)"
					experiences={[EXPERIENCES.COMMS, EXPERIENCES.CUST, EXPERIENCES.APPLE]}
				/>
			</Block>
			<Block>
				<Header>Education</Header>
				<Milestone
					icon={CURTIN_LOGO}
					pre="2015 - 2018"
					name="Bachelor Computer Science"
					sub="Curtin University"
					experiences={[
						EXPERIENCES.C,
						EXPERIENCES.JAVA,
						EXPERIENCES.ANDROID,
						EXPERIENCES.GITHUB,
						EXPERIENCES.AGILE,
					]}
				/>
			</Block>
			<Block>
				<Header>Personal Projects</Header>
				<HorizontalTiles>
					<Tile icon={PF_IMAGE} name="Placefinda" />
				</HorizontalTiles>
			</Block>
			<Copyright />
		</>
	);
}

export default Home;
