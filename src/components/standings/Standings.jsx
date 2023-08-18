import { Table } from "antd";
import styles from "./Standings.module.scss";
import { useGetDataStandings } from "../../hooks/useGetDataStandings";

const columns = [
	{
		title: "Rank",
		dataIndex: "rank",
	},
	{
		title: " ",
		dataIndex: "logo",
		render: (logo) => <img className={styles.logo} src={logo} alt="logo del club" />,
	},
	{
		title: "Club",
		dataIndex: "name",
		render: (club) => <a href="index.html">{club}</a>,
	},
	{
		title: "Pts",
		dataIndex: "points",
	},
	{
		title: "PJ",
		dataIndex: "played",
	},
	{
		title: "PG",
		dataIndex: "win",
	},
	{
		title: "PE",
		dataIndex: "draw",
	},
	{
		title: "PP",
		dataIndex: "lose",
	},
	{
		title: "GF",
		dataIndex: "gf",
	},
	{
		title: "GC",
		dataIndex: "ga",
	},
	{
		title: "DIF",
		dataIndex: "goalsDiff",
	},
];

const Standings = ({ dataLeague }) => {
	const { dataStandings } = useGetDataStandings({ dataLeague });
	return (
		<section className={styles.container}>
			{dataStandings ? (
				<>
					<h4 className={styles.title}>TABLA DE POSICIONES</h4>
					<Table
						className={styles.table}
						columns={columns}
						dataSource={dataStandings}
						size="small"
						pagination={false}
					/>
				</>
			) : (
				<h4 className={styles.notContent}>SIN CONTENIDO DISPONIBLE</h4>
			)}
		</section>
	);
};
export default Standings;
