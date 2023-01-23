import {getApiUrl} from "../../config";

export const getLeagueByCountry = async (country) => {
	return await getApiUrl(
		`leagues?season=${new Date().getFullYear()}&country=${country}&type=league`
	);
};
