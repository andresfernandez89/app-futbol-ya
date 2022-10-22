import data from "../../db/standingsMockData.json";
import styles from "./LeagueContainer.module.scss";

const LeagueContainer = () => {
  return <h2 className={styles.title}>{data.league}</h2>;
};

export default LeagueContainer;
