import { Skill } from "../../../types/types";
import { BodyTextSmall, Image, Box } from "../../atoms";

export const SkillChip: React.FC<{ skill: Skill }> = ({
	skill: { name, icon },
}) => (
	<Box flexDirection="row" alignItems="center" mx="2" my="3">
		<Image
			height="5"
			width="5"
			bg="white"
			borderRadius="48px"
			boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
			mr="4"
			src={icon}
		/>
		<BodyTextSmall>{name}</BodyTextSmall>
	</Box>
);
