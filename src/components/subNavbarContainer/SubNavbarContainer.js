import LeagueContainer from "../leagueContainer/LeagueContainer";
import SubNavbar from "../subNavbar/SubNavbar";
import styles from "./SubNavbarContainer.module.scss";

const SubNavbarContainer = () => {
	return (
		<div className={styles.container}>
			<LeagueContainer />
			<SubNavbar />
		</div>
	);
};

export default SubNavbarContainer;
