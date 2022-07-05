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
	<div className="standingsContainer">
		<h4>Tabla de Posiciones</h4>
		<Table columns={columns} dataSource={dataStanding.standings} size="small" pagination={false} />
	</div>
);

export default Standings;
