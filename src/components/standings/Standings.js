import {Table} from "antd";
import dataStanding from "../../db/standingsMockData.json";
import styles from "./Standings.module.scss";

const columns = [
	{
		title: "Rank",
		dataIndex: "rank",
	},
	{
		title: "",
		dataIndex: "logo",
		render: (logo) => <img className={styles.logo} src={logo} alt="logo del club"></img>,
	},
	{
		title: "Club",
		dataIndex: "club",
		render: (club) => <a href="index.html">{club}</a>,
	},
	{
		title: "Pts",
		dataIndex: "points",
	},
	{
		title: "PJ",
		dataIndex: "pj",
	},
	{
		title: "PG",
		dataIndex: "pg",
	},
	{
		title: "PE",
		dataIndex: "pe",
	},
	{
		title: "PP",
		dataIndex: "pp",
	},
	{
		title: "GF",
		dataIndex: "gf",
	},
	{
		title: "GC",
		dataIndex: "gc",
	},
	{
		title: "DIF",
		dataIndex: "dif",
	},
];

const Standings = () => (
	<div className={styles.standingsContainer}>
		<h4>TABLA DE POSICIONES</h4>
		<Table columns={columns} dataSource={dataStanding.standings} size="small" pagination={false} />
	</div>
);
export default Standings;
