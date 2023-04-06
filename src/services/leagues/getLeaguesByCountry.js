import {getApiUrl} from "../../config";

export const getLeaguesByCountry = async (country) => {
	const data = await getApiUrl(
		`leagues?season=${new Date().getFullYear()}&country=${country}&type=league`
	);
	return data;
};
