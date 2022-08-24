import Navbar from "../navbar/Navbar";
import DetailContainer from "../detailContainer/DetailContainer";
import {Layout} from "antd";
import styles from "./App.module.scss";
import data from "../../db/mockData.json";
const {Content} = Layout;

const App = () => {
	return (
		<div className={styles.mainContainer}>
			<Navbar data={data} />
			<Content className={styles.content}>
				<DetailContainer />
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default App;
