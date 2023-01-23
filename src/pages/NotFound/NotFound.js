import {useRouteError} from "react-router-dom";
import data from "../../db/mockData.json";
import styles from "./NotFound.module.scss";
import Navbar from "../../components/navbar/Navbar";
import {Layout} from "antd";
const {Content} = Layout;

function NotFound() {
	const error = useRouteError();
	console.error(error);
	return (
		<div className={styles.mainContainer}>
			<Navbar data={data} />
			<Content className={styles.content}>
				<div className={styles.container}>
					<h2>Oops!</h2>
					<p>Sorry, an unexpected error has occurred.</p>
					<p>
						<i>{error.statusText || error.message}</i>
					</p>
				</div>
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
}

export default NotFound;
