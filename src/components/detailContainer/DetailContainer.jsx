import SubNavbarContainer from "../subNavbarContainer/SubNavbarContainer";
import styles from "./DetailContainer.module.scss";
import { Outlet } from "react-router-dom";

const DetailContainer = () => {
	return (
		<div className={styles.mainContainer}>
			<SubNavbarContainer />
			<Outlet />
		</div>
	);
};

export default DetailContainer;
