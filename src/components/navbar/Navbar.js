import {useState} from "react";
import {Menu, Row, Col, Button, Dropdown, Drawer} from "antd";
import Icon, {MenuOutlined} from "@ant-design/icons";
import styles from "./Navbar.module.scss";

const leagues = (data) => (
	<Menu
		items={[
			{
				label: `${data.country[0].name}`,
				key: `${data.country[0].id}Leagues`,
				children: [
					{label: <a href="index.html">Primera</a>, key: "primeraTorneo"},
					{label: <a href="index.html">Segunda</a>, key: "segundaTorneo"},
				],
			},
			{
				label: <a href="index.html">{data.country[1].name}</a>,
				key: `${data.country[1].id}Leagues`,
			},
		]}
	/>
);

const teams = (data) => (
	<Menu
		items={[
			{
				label: `${data.country[0].name}`,
				key: `${data.country[0].id}Teams`,
				children: [
					{label: <a href="index.html">Primera</a>, key: "primeraEquipos"},
					{label: <a href="index.html">Segunda</a>, key: "segundaEquipos"},
				],
			},
			{
				label: <a href="index.html">{data.country[1].name}</a>,
				key: `${data.country[1].id}Teams`,
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

const players = (data) => (
	<Menu
		items={[
			{
				label: `${data.country[0].name}`,
				key: `${data.country[0].id}Players`,
				children: [
					{label: <a href="index.html">Primera</a>, key: "primeraJugadores"},
					{label: <a href="index.html">Segunda</a>, key: "segundaJugadores"},
				],
			},
			{
				label: <a href="index.html">{data.country[1].name}</a>,
				key: `${data.country[1].id}Players`,
			},
		]}
	/>
);

const Navbar = ({data}) => {
	const [visible, setVisible] = useState(false);

	const handleHamburgerClick = () => {
		setVisible(true);
	};

	const handleDrawerClose = () => {
		setVisible(false);
	};

	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.h1}>FUTBOL YA</h1>
			<div className={styles.mobile}>
				<Button className={styles.btnHamburgerClick} onClick={handleHamburgerClick}>
					<MenuOutlined />
				</Button>
				<Drawer
					className={styles.mobileDrawer}
					placement="right"
					closable={false}
					visible={visible}
					onClose={handleDrawerClose}
				>
					<Row justify="end">
						<XmarkIcon className={styles.svgClose} onClick={handleDrawerClose} />
						<Col span={24}>
							<Button className={styles.btnServices} type="dash">
								<Dropdown overlay={leagues(data)} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Torneos
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button className={styles.btnServices} type="dash">
								<Dropdown overlay={teams(data)} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Equipos
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button className={styles.btnServices} type="dash">
								<Dropdown overlay={players(data)} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Jugadores
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button className={styles.btnAuth} type="primary">
								Registrarse
							</Button>
						</Col>
						<Col span={24}>
							<Button className={styles.btnAuth} type="primary">
								Iniciar Sesion
							</Button>
						</Col>
					</Row>
				</Drawer>
			</div>
			<div className={styles.mobileHidden}>
				<Button className={styles.btnServices} type="text">
					<Dropdown overlay={leagues(data)} arrow>
						<a href="index.html" onClick={(e) => e.preventDefault()}>
							Torneos
						</a>
					</Dropdown>
				</Button>
				<Button className={styles.btnServices} type="text">
					<Dropdown overlay={teams(data)} arrow>
						<a href="index.html" onClick={(e) => e.preventDefault()}>
							Equipos
						</a>
					</Dropdown>
				</Button>
				<Button className={styles.btnServices} type="text">
					<Dropdown overlay={players(data)} arrow>
						<a href="index.html" onClick={(e) => e.preventDefault()}>
							Jugadores
						</a>
					</Dropdown>
				</Button>
				<Button className={styles.btnAuth} type="primary">
					Registrarse
				</Button>
				<Button className={styles.btnAuth} type="primary">
					Iniciar Sesion
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
