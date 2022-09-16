import {Segmented} from "antd";
import {useState} from "react";
import styles from "./SubNavbar.module.scss";

const SubNavbar = () => {
	const [value, setValue] = useState("");
	return (
		<div className={styles.container}>
			<Segmented
				options={[
					{
						label: <p>Posiciones</p>,
						value: "standings",
					},
					{
						label: <p>Calendario</p>,
						value: "fixture",
					},
					{
						label: <p>Goleadores</p>,
						value: "scorers",
					},
				]}
				value={value}
				onChange={setValue}
			/>
		</div>
	);
};

export default SubNavbar;
