import React from "react";

export type Skill = {
	id: string;
	name: string;
	icon: string;
};

export type SkilledEvent = {
	id: string;
	name: string;
	dates: string;
	icon: string;
	description?: string;
	skills: Skill[];
};
