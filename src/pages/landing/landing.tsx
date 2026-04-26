import { BodyTextLegal } from "../../components/atoms";
import { Header, SkilledEvents } from "../../components/organisms";
import { EDUCATION_DATA } from "../../data/education";
import { EMPLOYMENT_DATA } from "../../data/employment";

export function LandingPage() {
	return (
		<>
			<Header />
			<SkilledEvents name="Employment" events={EMPLOYMENT_DATA} />
			<SkilledEvents name="Education" events={EDUCATION_DATA} />
			<BodyTextLegal>© Chris Neighbour 2021</BodyTextLegal>
		</>
	);
}
