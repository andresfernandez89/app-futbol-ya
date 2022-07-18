import Navbar from "../navbar/Navbar";
import {Layout} from "antd";
import mainLogo from "../../assets/icons/main-logo.png";
import styles from "./App.module.scss";
import data from "../../db/mockData.json";
const {Content} = Layout;

const App = () => {
	return (
		<div className={styles.mainContainer}>
			<Navbar data={data} />
			<Content className={styles.content}>
				<img className={styles.logo} src={mainLogo} alt="logo principal" />
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default App;
