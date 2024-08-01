import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>Cryptonit</h1>
			<div className={styles.block__input}>
				<img
					src='/images/icons/search.svg'
					alt='search'
					className={styles.icon__search}
				/>
				<input type='text' className={styles.input} />
				<button className={styles.mbSelect}>
					<img
						src='/images/icons/search_S.svg'
						alt='searchS'
						className={styles.icon__searchS}
					/>
					<img
						src='/images/icons/arrow-down.svg'
						alt='arrow'
						className={styles.icon__arrow}
					/>
				</button>
			</div>
			<div className={styles.block__right}>
				<Link to='/about' className={styles.link__about}>
					About us
				</Link>
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
		</header>
	);
};

export default Header;
