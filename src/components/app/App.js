import Navbar from "../navbar/Navbar";
import {Layout} from "antd";
import "./App.css";
import {DribbbleOutlined} from "@ant-design/icons";
import DetailContainer from "../detailContainer/DetailContainer";
const {Content} = Layout;

const App = () => {
	return (
		<div className="container">
			<Navbar />
			<Content className="app-container">
				<h1>FUTBOL YA</h1>
				<DribbbleOutlined className="main-icon" />
				<DetailContainer />
			</Content>
			<footer className="footer">© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default App;
