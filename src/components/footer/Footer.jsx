import { Link, useNavigate } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
	const nav = useNavigate();

	return (
		<footer
			className={`${styles.footer} bg-color_two w-full h-12 flex justify-between items-center px-9 py-10 TABLET1024:ps-5 MOBILE768:flex-col MOBILE768:h-56 MOBILE768:py-5 MOBILE768:px-0`}
		>
			<div
				className={`${styles.block__logo} flex items-center gap-12 text-color_three TABLET1024:gap-5 MOBILE768:flex-col MOBILE768:gap-4`}
			>
				<h1
					className={`${styles.logo} text-base18 font-black uppercase hover:text-color_eight hover:cursor-pointer`}
					onClick={() => nav('/')}
				>
					Cryptonit
				</h1>
				<p
					className={`${styles.copy} font-sans text-color_seven text-base TABLET1024:max-w-40 MOBILE768:text-center MOBILE768:max-w-36`}
				>
					Copyright © TRADeOT. All Rights Reserved.
				</p>
			</div>
			<ul
				className={`${styles.menu} flex items-center gap-9 -ml-28 TABLET1024:-ml-12 MOBILE768:-ml-0`}
			>
				<li
					className={`${styles.list} font-medium text-color_three text-base hover:text-color_eight hover:cursor-pointer PK1200:max-w-36`}
				>
					<Link to='/about'>About</Link>
				</li>
				<li
					className={`${styles.list} font-medium text-color_three text-base hover:text-color_eight hover:cursor-pointer PK1200:max-w-36`}
				>
					<Link to='/general-terms'>GENERAL TERMS AND CONDITIONS OF USE</Link>
				</li>
			</ul>
			<div
				className={`${styles.block__right} flex gap-12 items-center TABLET1024:gap-7`}
			>
				<div className={`${styles.block__socials} flex gap-2 items-center`}>
					<a href='#' className={styles.link}>
						<img
							src='/images/icons/socials/discord.svg'
							alt='discord'
							className='w-7 h-7 hover:cursor-pointer'
						/>
					</a>
					<a href='#' className={styles.link}>
						<img
							src='/images/icons/socials/twitter.svg'
							alt='twitter'
							className='w-7 h-7 hover:cursor-pointer'
						/>
					</a>
					<a href='#' className={styles.link}>
						<img
							src='/images/icons/socials/tg.svg'
							alt='tg'
							className='w-7 h-7 hover:cursor-pointer'
						/>
					</a>
				</div>
				<button
					className={`${styles.exit} bg-transparent text-color_three flex items-center hover:text-color_eight hover:cursor-pointer`}
				>
					Sign Up
					<img
						src='/images/icons/exit.svg'
						alt='exit'
						className={`${styles.icon__exit} w-6 h-7 ml-2`}
					/>
				</button>
			</div>
		</footer>
	);
};

export default Footer;
