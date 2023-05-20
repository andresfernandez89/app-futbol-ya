import { Row, Col } from "antd";
import Standings from "../standings/Standings";
import Fixture from "../fixture/Fixture";
import styles from "./DefaultContentLeague.module.scss";

const DefaulContentLeague = () => {
	return (
		<>
			<Row
				gutter={{
					md: 24,
					lg: 32,
				}}
				className={styles.defaultContentLeague}
			>
				<Col className={styles.standings} md={12}>
					<Standings dataLeague={{ id: 128, season: 2023 }} />
				</Col>
				<Col md={12}>
					<Fixture dataLeague={{ id: 128, season: 2023 }} />
				</Col>
			</Row>
		</>
	);
};

export default DefaulContentLeague;
