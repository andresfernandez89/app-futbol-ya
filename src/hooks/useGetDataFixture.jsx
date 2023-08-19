import { useEffect, useState } from "react";
import data from "../db/getFixtureByLeagueId.json";

export default function useGetDataFixture({ dataLeague }) {
	const [id, setId] = useState(dataLeague.id);
	const [season, setSeason] = useState(dataLeague.season);
	const [dataFixture, setDataFixture] = useState(null);
	useEffect(() => {
		let newArr = data.response.filter((res) => {
			return res.league.round === "1st Phase - 10";
		});
		setTimeout(setDataFixture(newArr), 3000);
	}, [id, season]);

	return { dataFixture };
}
