import React from "react";
import style from "./milestone.module.scss";
import { Experience } from "../experiences";

export const Milestone: (props: {
	icon?: string;
	pre?: string;
	name: string;
	sub: string;
	experiences: Experience[];
}) => JSX.Element = ({ icon,pre, name, sub, experiences }) => {
	return (
		<div className={style.milestone}>
			<div className={style.left}>
				<div
					className={style.icon}
					style={{ backgroundImage: `url('${icon}')` }}
				/>
			</div>
			<div className={style.right}>
				<div className={style.title}>
					<div className={style.pre}>{pre}</div>
					<div className={style.name}>{name}</div>
					<div className={style.sub}>{sub}</div>
				</div>

				<div className={style.topics}>
					<div className={style.list}>
						{experiences.map((exp, i) => (
							<KeyPoint key={i} value={exp} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const KeyPoint: (props: { value: Experience }) => JSX.Element = ({ value }) => (
	<div className={style.key_point}>
		<div className={style.container}>
			<span className={style.icon}
					style={{ backgroundImage: `url('${value.icon}')` }}/>
			<span className={style.value}>{value.name}</span>
		</div>
	</div>
);
