import React from "react";
import style from "./horizontal-tiles.module.scss";

export const HorizontalTiles: React.FC = ({ children }) => (
	<div className={style.scroller}>
		<div className={style.content}>{children}</div>
	</div>
);

export const Tile: (props: {name:string, icon:string}) => JSX.Element = ({ name, icon }) => (
	<div className={style.tile}>
		<div className={style.icon} style={{backgroundImage: `url('${icon}')`}} />
		<div className={style.title}>{name}</div>
	</div>
);