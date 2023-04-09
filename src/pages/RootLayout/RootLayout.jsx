import { useState } from "react";
import { Layout } from "antd";
//import {useGetLeaguesByCountry} from "../../hooks/useGetLeaguesByCountry.js";
import argentinaLeague from "../../db/getLeaguesByArgentina.json";
import englandLeague from "../../db/getLeaguesByEngland.json";
import argentina from "../../db/getByCountryArgentina.json";
import england from "../../db/getByCountryEngland.json";
import App from "../../components/app/App";
import Navbar from "../../components/navbar/Navbar";
import styles from "./RootLayout.module.scss";
const { Content } = Layout;
const { response: argLeague } = argentinaLeague;
const { response: engLeague } = englandLeague;
const { response: eng } = england;
const { response: arg } = argentina;

const RootLayout = () => {
	console.log("render rootlayout");
	const countries = ["argentina", "brasil"];
	const [country, setCountry] = useState("argentina");
	//const {leagues} = useGetLeaguesByCountry({country});

	return (
		<div className={styles.mainContainer}>
			{/* {argentinaLeague != null ? console.log("Respuesta:", argentinaLeague) : ""} */}
			<Navbar data={{ arg, eng, argLeague, engLeague }} />
			<Content className={styles.content}>
				<App />
			</Content>
			<footer className={styles.footer}>© 2022 Copyright - futbolya.com</footer>
		</div>
	);
};

export default RootLayout;
