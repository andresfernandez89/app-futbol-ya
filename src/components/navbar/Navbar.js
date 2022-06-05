import React from "react";
import {useState} from "react";
import {Menu, Row, Col, Button, Dropdown, Drawer} from "antd";
import Icon, {MenuOutlined} from "@ant-design/icons";

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

const XmarkSvg = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em">
		<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
	</svg>
);

const XmarkIcon = (props) => <Icon component={XmarkSvg} {...props} />;
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
	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<>
			<div class="mobileVisible">
				<Button style={{fontSize: "22px", height: "auto"}} onClick={showDrawer}>
					<MenuOutlined />
				</Button>
				<Drawer placement="right" closable={false} visible={visible} onClose={onClose}>
					<Row justify="end">
						<XmarkIcon
							style={{
								fontSize: "42px",
								marginBottom: "20px",
							}}
							onClick={onClose}
						/>
						<Col span={24}>
							<Button type="dash" style={{width: "100%"}}>
								<Dropdown overlay={leagues} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Torneos
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button type="dash" style={{width: "100%"}}>
								<Dropdown overlay={teams} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Equipos
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button type="dash" style={{width: "100%"}}>
								<Dropdown overlay={players} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Jugadores
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button className="menu-auth" type="primary" style={{width: "100%"}}>
								Registrarse
							</Button>
						</Col>
						<Col span={24}>
							<Button className="menu-auth" type="primary" style={{width: "100%"}}>
								Iniciar Sesion
							</Button>
						</Col>
					</Row>
				</Drawer>
			</div>
			<div className="app-navbar mobileHidden">
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
		</>
	);
};

export default Navbar;
