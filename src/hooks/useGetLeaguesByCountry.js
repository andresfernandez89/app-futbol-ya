import {useEffect, useState} from "react";
import {getLeaguesByCountry} from "../services/leagues/getLeaguesByCountry";

export function useGetLeaguesByCountry({country}) {
	const [leagues, setLeagues] = useState();
	useEffect(() => {
		getLeaguesByCountry(country).then((response) => setLeagues(response));
	}, [country]);
	return {leagues};
}
