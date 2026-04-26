import type { ReactNode } from "react";
import { Button } from "../../atoms";

export type SocialPinProps = {
	icon: ReactNode;
	name: string;
	url: string;
};

export function SocialPin({ name, url, icon }: SocialPinProps) {
	return (
		<Button
			mx={["1", "4"]}
			my={["4", "6"]}
			px={["6", "8"]}
			bg="rgba(255, 255, 255, 0.2)"
			href={url}
		>
			{icon}
			{name}
		</Button>
	);
}
