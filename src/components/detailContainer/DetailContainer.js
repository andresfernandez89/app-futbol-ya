import {Row, Col} from "antd";
import Standings from "../standings/Standings";

const DetailContainer = () => {
	return (
		<Row>
			<Col md={24} lg={8}>
				<Standings />
			</Col>
			<Col md={24} lg={16}></Col>
		</Row>
	);
};

export default DetailContainer;
