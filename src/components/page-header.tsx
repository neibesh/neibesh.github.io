import React from "react";
import style from "./page-header.module.scss";
import { PageCapping } from "./page-capping";
import { GitHub,  Linkedin, Twitter } from "react-feather";

export const PageHeader = () => (
	<div className={style.header}>
		<div className={style.overlay}>
			<PageCapping>
				<div className={style.float}>
					<div className={style.feature}>
						<div className={style.icon}></div>
						<div className={style.text}>
							<div className={style.name}>Chris Neighbour</div>
							<div className={style.job}>Software Engineer</div>
						</div>
					</div>
					<div className={style.social}>
						<SocialPin icon={<GitHub />} name="GitHub" url="https://github.com/neibesh" />
						<SocialPin icon={<Linkedin />} name="LinkedIn" url="https://www.linkedin.com/in/chris-neighbour-651b0a137" />
						<SocialPin icon={<Twitter />} name="Twitter" url="https://twitter.com/neibesh" />
					</div>
				</div>
			</PageCapping>
		</div>
	</div>
);

const SocialPin: (props: { icon: JSX.Element; name: string, url:string }) => JSX.Element =
	({ icon, name, url }) => {
		return (
			<a className={style.social_pin} target="_blank" href={url} rel="noreferrer">
				{icon} {name}
			</a>
		);
	};
