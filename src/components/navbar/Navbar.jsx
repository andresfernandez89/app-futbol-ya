import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Row, Col, Button, Dropdown, Drawer } from "antd";
import styles from "./Navbar.module.scss";
import Icon, { MenuOutlined } from "@ant-design/icons";
//import {getLeaguesByCountry} from "../../services/leagues/getLeaguesByCountry";

const menuItems = ({ arg, eng, argLeague, engLeague }) => {
	return (
		<Menu
			items={[
				{
					label: <a href="/index.html">{arg[0].name}</a>,
					key: `${arg[0].code}Leagues`,
					children: argLeague.map((element) => {
						const { name, id } = element.league;
						if (name === "Liga Profesional Argentina" || name === "Primera Nacional") {
							return { label: <a href="/">{name}</a>, key: id };
						}
						return null;
					}),
				},
				{
					label: <a href="/index.html">{eng[0].name}</a>,
					key: `${eng[0].code}Leagues`,
					children: engLeague.map((element) => {
						const { name, id } = element.league;
						if (name === "Premier League" || name === "FA Cup") {
							return { label: <a href="/">{name}</a>, key: id };
						}
						return null;
					}),
				},
			]}
		/>
	);
};

const XmarkSvg = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em">
		<path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
	</svg>
);
const XmarkIcon = (props) => <Icon component={XmarkSvg} {...props} />;

const Navbar = ({ data }) => {
	const [open, setOpen] = useState(false);
	const { arg, eng, argLeague, engLeague } = data;

	const handleHamburgerClick = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={styles.mainContainer}>
			<Link to="/" className={styles.h1}>
				FUTBOL YA
			</Link>
			<div className={styles.mobile}>
				<Button className={styles.btnHamburgerClick} onClick={handleHamburgerClick}>
					<MenuOutlined />
				</Button>
				<Drawer
					className={styles.mobileDrawer}
					placement="right"
					closable={false}
					open={open}
					onClose={handleDrawerClose}
				>
					<Row justify="end">
						<XmarkIcon className={styles.svgClose} onClick={handleDrawerClose} />
						<Col span={24}>
							<Button className={styles.btnServices} type="dash">
								<Dropdown overlay={menuItems({ arg, eng, argLeague, engLeague })} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Torneos
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button className={styles.btnServices} type="dash">
								<Dropdown overlay={menuItems({ arg, eng, argLeague, engLeague })} arrow>
									<a href="index.html" onClick={(e) => e.preventDefault()}>
										Equipos
									</a>
								</Dropdown>
							</Button>
						</Col>
						<Col span={24}>
							<Button className={styles.btnServices} type="dash">
								<Dropdown overlay={menuItems({ arg, eng, argLeague, engLeague })} arrow>
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
					<Dropdown overlay={menuItems({ arg, eng, argLeague, engLeague })} arrow>
						<a href="index.html" onClick={(e) => e.preventDefault()}>
							Torneos
						</a>
					</Dropdown>
				</Button>
				<Button className={styles.btnServices} type="text">
					<Dropdown overlay={menuItems({ arg, eng, argLeague, engLeague })} arrow>
						<a href="index.html" onClick={(e) => e.preventDefault()}>
							Equipos
						</a>
					</Dropdown>
				</Button>
				<Button className={styles.btnServices} type="text">
					<Dropdown overlay={menuItems({ arg, eng, argLeague, engLeague })} arrow>
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
