import { Box } from "../../atoms/box";
import { Image } from "../../atoms/image/image";
import { Header1, Header3 } from "../../atoms/text";
import ProfileImage from "../../../images/profile.jpg";
import { SocialPin } from "../../molecules";
import { GitHub, Linkedin, Twitter } from "react-feather";

const HEADER_GRADIENT = "linear-gradient(to right, #2f80ed, #56ccf2)";

export const Header: React.FC = () => (
	<Box
		background={HEADER_GRADIENT}
		boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
	>
		<Box
			padding="3"
			height="12"
			bg="rgba(0, 0, 0, 0.2)"
			justifyContent="center"
			alignItems="center"
		>
			<Box width="100%" maxWidth="920px">
				<Box flexDirection={["column", "row"]} alignItems="center">
					<Box pr="7">
						<Image
							height="9"
							width="9"
							bg="white"
							borderRadius="48px"
							border="4px solid #fff"
							boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
							src={ProfileImage}
						/>
					</Box>
					<Box>
						<Header1 color="white" textAlign={["center", "left"]}>
							Chris Neighbour
						</Header1>
						<Header3 color="white" textAlign={["center", "left"]}>
							Software Engineer
						</Header3>
					</Box>
				</Box>
				<Box flexDirection="row" justifyContent={["center", "flex-start"]}>
					<SocialPin
						icon={<GitHub />}
						name="GitHub"
						url="https://github.com/neibesh"
					/>
					<SocialPin
						icon={<Linkedin />}
						name="LinkedIn"
						url="https://www.linkedin.com/in/chris-neighbour-651b0a137"
					/>
					<SocialPin
						icon={<Twitter />}
						name="Twitter"
						url="https://twitter.com/neibesh"
					/>
				</Box>
			</Box>
		</Box>
	</Box>
);
