import React from "react";
import { PageCapping } from "./page-capping";
import style from "./ui.module.scss";

export const Header: React.FC = ({ children }) => <p>{children}</p>;

export const Block: React.FC = ({ children }) => (
	<div className={style.block}>
		<PageCapping>{children}</PageCapping>
	</div>
);

export const Copyright: React.FC = ({ children }) => (
	<div className={style.copyright}>
		© Chris Neighbour 2021
	</div>
);
