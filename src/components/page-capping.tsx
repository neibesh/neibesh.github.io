import React from "react";
import style from "./page-capping.module.scss";

export const PageCapping: React.FC = ({ children }) => (
	<div className={style.wrapper}>
		<div className={style.capping}>{children}</div>
	</div>
);
