import Navbar from "../navbar/Navbar";
import {Layout} from "antd";
<<<<<<< HEAD
import "./App.css";
import {DribbbleOutlined} from "@ant-design/icons";
import DetailContainer from "../detailContainer/DetailContainer";
=======
import mainLogo from "../../assets/icons/main-logo.png";
import styles from "./App.module.scss";
import data from "../../db/mockData.json";
>>>>>>> 766b88566fa25b27801274039b3c005b90b8c0d4
const {Content} = Layout;

const App = () => {
	return (
<<<<<<< HEAD
		<div className="container">
			<Navbar />
			<Content className="app-container">
				<h1>FUTBOL YA</h1>
				<DribbbleOutlined className="main-icon" />
				<DetailContainer />
=======
		<div className={styles.mainContainer}>
			<Navbar data={data} />
			<Content className={styles.content}>
				<img className={styles.logo} src={mainLogo} alt="logo principal" />
>>>>>>> 766b88566fa25b27801274039b3c005b90b8c0d4
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default App;
