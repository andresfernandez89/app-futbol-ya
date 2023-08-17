import { Table } from "antd";
import { useEffect, useState } from "react";
import styles from "./Standings.module.scss";
import data from "../../db/getBystandingsArg1.json";

const columns = [
	{
		title: "Rank",
		dataIndex: "rank",
	},
	{
		title: " ",
		dataIndex: "logo",
		render: (logo) => <img className={styles.logo} src={logo} alt="logo del club"></img>,
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
	const [id, setId] = useState(dataLeague.id);
	const [season, setSeason] = useState(dataLeague.season);
	const [dataStandings, setDataStandings] = useState(null);

	useEffect(() => {
		const newObj = data.response[0].league.standings[1].map((obj) => {
			return {
				key: obj.team.id,
				rank: obj.rank,
				logo: obj.team.logo,
				name: obj.team.name,
				points: obj.points,
				played: obj.all.played,
				win: obj.all.win,
				draw: obj.all.draw,
				lose: obj.all.lose,
				gf: obj.all.goals.for,
				ga: obj.all.goals.against,
				goalsDiff: obj.goalsDiff,
			};
		});

		setTimeout(setDataStandings(newObj), 2000);
	}, [id, season]);
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
