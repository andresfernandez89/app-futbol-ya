import Fixture from "../fixture/Fixture";
import Standings from "../standings/Standings";
import SubNavbarContainer from "../subNavbarContainer/SubNavbarContainer";
import {Row, Col} from "antd";
import styles from "./DetailContainer.module.scss";

const DetailContainer = () => {
	return (
		<div className={styles.mainContainer}>
			<SubNavbarContainer />
			<Row justify="space-evenly">
				<Col xs={22} sm={22} md={22} lg={10}>
					<Standings />
				</Col>
				<Col xs={22} sm={22} md={22} lg={10}>
					<Fixture />
				</Col>
			</Row>
		</div>
	);
};

export default DetailContainer;
