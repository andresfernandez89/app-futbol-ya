import styles from "../footer/Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>© {new Date().getFullYear()} Copyright - futbolya.com</footer>
	);
};

export default Footer;
