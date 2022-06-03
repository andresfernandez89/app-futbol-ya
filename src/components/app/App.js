import Navbar from "../navbar/Navbar";
import {Layout} from "antd";
import "./App.css";
import {DribbbleOutlined} from "@ant-design/icons";
const {Content, Footer} = Layout;

const App = () => {
	return (
		<>
			<Navbar />
			<DribbbleOutlined className="main-icon" />
			<h1>FUTBOL YA</h1>
			<Content style={{minHeight: 500}}>Content</Content>
			<Footer style={{alignItems: "center", alignContent: "center", textAlign: "center"}}>
				© 2022 Copyright - futbolya.com
			</Footer>
		</>
	);
};

export default App;
