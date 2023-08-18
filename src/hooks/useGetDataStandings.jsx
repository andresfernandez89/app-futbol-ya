import { useState, useEffect } from "react";
import data from "../db/getBystandingsArg1.json";

export function useGetDataStandings({ dataLeague }) {
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

	return { dataStandings };
}
