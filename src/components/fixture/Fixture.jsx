import styles from "./Fixture.module.scss";
import { Row, Col } from "antd";
import useGetDataFixture from "../../hooks/useGetDataFixture";

const Fixture = ({ dataLeague }) => {
	const { dataFixture } = useGetDataFixture({ dataLeague });
	return (
		<>
			<section className={styles.container}>
				<h4 className={styles.title}>FIXTURE</h4>
				{dataFixture?.map(({ fixture, teams, score }) => {
					let statusMatch;
					if (fixture.status.short === "FT") {
						statusMatch = "Finalizado";
					} else if (fixture.status.short === "1H") {
						statusMatch = "Primer Tiempo";
					} else if (fixture.status.short === "HT") {
						statusMatch = "Entretiempo";
					} else if (fixture.status.short === "2H") {
						statusMatch = "Segundo Tiempo";
					} else if (fixture.status.short === "TBD") {
						const date = new Date(fixture.timestamp * 1000);
						const day = date.getDate();
						const month = date
							.toLocaleString("es-ES", { month: "long" })
							.replace(/^\w/, (c) => c.toUpperCase());
						const dayOfWeek = date
							.toLocaleString("es-ES", { weekday: "long" })
							.replace(/^\w/, (c) => c.toUpperCase());
						const hour = date.getHours();
						let minutes = date.getMinutes().toString().padEnd(2, "0");
						statusMatch = `${dayOfWeek} ${day} de ${month} ${hour}:${minutes} Hs`;
					}
					return (
						<div key={fixture.id}>
							<Row justify="center">
								<Col>
									<span className={styles.status}>{statusMatch}</span>
								</Col>
							</Row>
							<Row justify="center" wrap={false}>
								<Col xs={24} sm={24} md={24}>
									<Row className={styles.match} justify="center" wrap={false} align="middle">
										<Col
											xs={11}
											sm={11}
											md={10}
											lg={10}
											className={`${styles.containerTeam} ${styles.containerTeamA}`}
										>
											<span className={styles.team}>{teams.home.name}</span>
											<img src={teams.home.logo} className={styles.logo} alt="logo club" />
											<span className={styles.result}>
												2{score.extratime.home || score.fulltime.home}
											</span>
										</Col>
										<Col xs={2} sm={2} className={styles.versus}>
											<span>vs</span>
										</Col>
										<Col
											xs={11}
											sm={11}
											md={10}
											lg={10}
											className={`${styles.containerTeam} ${styles.containerTeamB}`}
										>
											<span className={styles.result}>
												0{score.extratime.away || score.fulltime.away}
											</span>
											<img src={teams.away.logo} className={styles.logo} alt="logo club" />
											<span className={styles.team}>{teams.away.name}</span>
										</Col>
									</Row>
								</Col>
							</Row>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Fixture;
