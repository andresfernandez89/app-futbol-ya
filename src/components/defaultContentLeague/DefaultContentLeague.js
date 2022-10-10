import Standings from "../standings/Standings";
import Fixture from "../fixture/Fixture";
import {Row, Col} from "antd";

const DefaulContentLeague = () => {
	return (
		<>
			<Row justify="space-evenly">
				<Col xs={22} sm={22} md={22} lg={10}>
					<Standings />
				</Col>
				<Col xs={22} sm={22} md={22} lg={10}>
					<Fixture />
				</Col>
			</Row>
		</>
	);
};

export default DefaulContentLeague;
