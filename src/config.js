/* require("dotenv").config();
const API_KEY = process.env.API_KEY; */

const options = {
	method: "GET",
	headers: {
		"x-apisports-key": "e6cbfd2ce032d6977013b6bb29ecc189",
	},
};

export const getApiUrl = async (path) => {
	const response = await fetch(`https://v3.football.api-sports.io/${path}`, options);
	return response.json();
};
