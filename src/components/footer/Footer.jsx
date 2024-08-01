import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.block__logo}>
				<h1 className={styles.logo}>Cryptonit</h1>
				<p className={styles.copy}>Copyright © TRADeOT. All Rights Reserved.</p>
			</div>
			<ul className={styles.menu}>
				<li className={styles.list}>
					<Link to='/about'>About</Link>
				</li>
				<li className={styles.list}>Privacy Policy </li>
				<li className={styles.list}>Terms of Use</li>
			</ul>
			<div className={styles.block__right}>
				<div className={styles.block__socials}>
					<a href='#' className={styles.link}>
						<img src='/images/icons/socials/discord.svg' alt='discord' />
					</a>
					<a href='#' className={styles.link}>
						<img src='/images/icons/socials/twitter.svg' alt='twitter' />
					</a>
					<a href='#' className={styles.link}>
						<img src='/images/icons/socials/tg.svg' alt='tg' />
					</a>
				</div>
				<button className={styles.exit}>
					Sign Up{' '}
					<img
						src='/images/icons/exit.svg'
						alt='exit'
						className={styles.icon__exit}
					/>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
