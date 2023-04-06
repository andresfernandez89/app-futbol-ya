import { Row, Col } from "antd";
import Standings from "../standings/Standings";
import Fixture from "../fixture/Fixture";

const DefaulContentLeague = () => {
	return (
		<>
			<Row justify="space-evenly">
				<Col xs={22} sm={22} md={22} lg={10}>
					<Standings dataLeague={{ id: 128, season: 2023 }} />
				</Col>
				<Col xs={22} sm={22} md={22} lg={10}>
					<Fixture dataLeague={{ id: 128, season: 2023 }} />
				</Col>
			</Row>
		</>
	);
};

export default DefaulContentLeague;
