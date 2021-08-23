import { SkilledEvent } from "../../../types/types";
import { Box, Header2, Header4, Header5, Image } from "../../atoms";
import { SkillChip } from "../../molecules";

export const SkilledEvents: React.FC<{
	name: string;
	events: SkilledEvent[];
}> = ({ name, events }) => {
	return (
		<Box
			px="2"
			py="8"
			justifyContent="center"
			alignItems="center"
			background="linear-gradient( 0deg, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 0) 34%, rgba(245, 245, 245, 0) 100%)"
		>
			<Box width="100%" maxWidth="920px">
				<Header2>{name}</Header2>
				{events.map((skill) => (
					<SkillBlock key={skill.id} skill={skill} />
				))}
			</Box>
		</Box>
	);
};

const SkillBlock: React.FC<{ skill: SkilledEvent }> = ({
	skill: { icon, dates, name, description, skills },
}) => (
	<Box my="8">
		<Box flexDirection={["column", "row"]}>
			<Box alignItems={["center"]}>
				<Image
					height="8"
					width="8"
					bg="white"
					borderRadius="48px"
					border="4px solid #fff"
					boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
					mb={["6"]}
					src={icon}
				/>
			</Box>
			<Box pl={[0, "4"]}>
				<Box pl={[0, "4"]}>
					<Header5 textAlign={["center", "left"]}>{dates}</Header5>
					<Header2 textAlign={["center", "left"]}>{name}</Header2>
					<Header4 textAlign={["center", "left"]}>{description}</Header4>
				</Box>
				<Box
					flexDirection="row"
					width="100%"
					flexWrap="wrap"
					justifyContent={["center", "flex-start"]}
					pt={["6"]}
				>
					{skills.map((skill) => (
						<SkillChip key={skill.id} skill={skill} />
					))}
				</Box>
			</Box>
		</Box>
	</Box>
);
