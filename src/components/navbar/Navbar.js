import React from "react";
import {Menu, Row, Col, Button, Dropdown} from "antd";

import "./Navbar.css";

const leagues = (
	<Menu
		items={[
			{
				label: "Argentina",
				key: "argentinaTorneos",
				children: [
					{label: <a href="index.html">Primera</a>, key: "primeraTorneo"},
					{label: <a href="index.html">Segunda</a>, key: "segundaTorneo"},
				],
			},
			{
				label: "Copa del Mundo",
				key: "mundialTorneos",
			},
		]}
	/>
);

const teams = (
	<Menu
		items={[
			{
				label: "Argentina",
				key: "argentinaEquipos",
				children: [
					{label: <a href="index.html">Primera</a>, key: "primeraEquipos"},
					{label: <a href="index.html">Segunda</a>, key: "segundaEquipos"},
				],
			},
			{
				label: "Copa del Mundo",
				key: "mundialEquipos",
			},
		]}
	/>
);

const players = (
	<Menu
		items={[
			{
				label: "Argentina",
				key: "argentinaJugadores",
				children: [
					{label: <a href="index.html">Primera</a>, key: "primeraJugadores"},
					{label: <a href="index.html">Segunda</a>, key: "segundaJugadores"},
				],
			},
			{
				label: <a href="index.html">Copa del Mundo</a>,
				key: "mundialJugadores",
			},
		]}
	/>
);

const Navbar = () => {
	return (
		<div>
			<div className="app-navbar">
				<Row>
					<Col flex={"auto"} offset={8}>
						<Button type="text">
							<Dropdown overlay={leagues} arrow>
								<a href="index.html" onClick={(e) => e.preventDefault()}>
									Torneos
								</a>
							</Dropdown>
						</Button>
						<Button type="text">
							<Dropdown overlay={teams} arrow>
								<a href="index.html" onClick={(e) => e.preventDefault()}>
									Equipos
								</a>
							</Dropdown>
						</Button>
						<Button type="text">
							<Dropdown overlay={players} arrow>
								<a href="index.html" onClick={(e) => e.preventDefault()}>
									Jugadores
								</a>
							</Dropdown>
						</Button>
					</Col>
					<Button className="menu-auth" type="primary">
						Registrarse
					</Button>
					<Button className="menu-auth" type="primary">
						Iniciar Sesion
					</Button>
				</Row>
			</div>
		</div>
	);
};

export default Navbar;
