import {Row, Col} from "antd";
import Standings from "../standings/Standings";

const DetailContainer = () => {
	return (
		<Row justify="space-evenly">
			<Col md={12} lg={8}>
				<Standings />
			</Col>
			<Col md={12} lg={14}>
				Fixture
			</Col>
		</Row>
	);
};

export default DetailContainer;
