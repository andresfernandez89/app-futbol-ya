import Navbar from "../navbar/Navbar";
import {Layout, Typography, Row, Col} from "antd";
import mainLogo from "../../assets/icons/main-logo.png";
import styles from "./App.module.scss";
import data from "../../db/mockData.json";
const {Content} = Layout;
const {Title} = Typography;

const App = () => {
	return (
		<div className={styles.mainContainer}>
			<Navbar data={data} />
			<Content className={styles.content}>
				<Row>
					<Col md={9} offset={1}>
						<img className={styles.logo} src={mainLogo} alt="logo principal" />
					</Col>
					<Col flex="auto">
						<Title level={1} italic>
							{data.country[0].leagues[0].name}
						</Title>
					</Col>
				</Row>
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default App;
