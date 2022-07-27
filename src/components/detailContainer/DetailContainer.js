import {Row, Col} from "antd";
import Standings from "../standings/Standings";

const DetailContainer = () => {
	return (
		<Row justify="space-evenly">
			<Col xs={22} sm={22} md={10} lg={8}>
				<Standings />
			</Col>
			<Col xs={22} sm={22} md={12} lg={14}>
				Fixture
			</Col>
		</Row>
	);
};

export default DetailContainer;
