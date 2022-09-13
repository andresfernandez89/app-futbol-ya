import LeagueContainer from "../leagueContainer/LeagueContainer";
import styles from "./SubNavbarContainer.module.scss";

const SubNavbarContainer = () => {
	return (
		<div className={styles.container}>
			<LeagueContainer />
			<div>SubNavBar</div>
		</div>
	);
};

export default SubNavbarContainer;
