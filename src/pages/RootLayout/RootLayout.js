import App from "../../components/app/App";
import data from "../../db/mockData.json";
import Navbar from "../../components/navbar/Navbar";
import styles from "./RootLayout.module.scss";
import {Layout} from "antd";
const {Content} = Layout;

const RootLayout = () => {
	return (
		<div className={styles.mainContainer}>
			<Navbar data={data} />
			<Content className={styles.content}>
				<App />
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default RootLayout;
