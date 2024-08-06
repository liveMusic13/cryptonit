// import { Link, useNavigate } from 'react-router-dom';
// import styles from './HeaderTest.module.css';

// const Header = () => {
// 	const nav = useNavigate();

// 	return (
// 		<header className={styles.header}>
// 			<h1 className={styles.logo} onClick={() => nav('/')}>
// 				Cryptonit
// 			</h1>
// 			<div className={styles.block__input}>
// 				<img
// 					src='/images/icons/search.svg'
// 					alt='search'
// 					className={styles.icon__search}
// 				/>
// 				<input type='text' className={styles.input} />
// 				<button className={styles.mbSelect}>
// 					<img
// 						src='/images/icons/search_S.svg'
// 						alt='searchS'
// 						className={styles.icon__searchS}
// 					/>
// 					<img
// 						src='/images/icons/arrow-down.svg'
// 						alt='arrow'
// 						className={styles.icon__arrow}
// 					/>
// 				</button>
// 			</div>
// 			<div className={styles.block__right}>
// 				<Link to='/about' className={styles.link__about}>
// 					About us
// 				</Link>
// 				<div className={styles.block__socials}>
// 					<a href='#' className={styles.link}>
// 						<img src='/images/icons/socials/discord.svg' alt='discord' />
// 					</a>
// 					<a href='#' className={styles.link}>
// 						<img src='/images/icons/socials/twitter.svg' alt='twitter' />
// 					</a>
// 					<a href='#' className={styles.link}>
// 						<img src='/images/icons/socials/tg.svg' alt='tg' />
// 					</a>
// 				</div>
// 				<button className={styles.exit}>
// 					Sign Up{' '}
// 					<img
// 						src='/images/icons/exit.svg'
// 						alt='exit'
// 						className={styles.icon__exit}
// 					/>
// 				</button>
// 			</div>
// 		</header>
// 	);
// };

// export default Header;

import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	const nav = useNavigate();

	return (
		<header
			className={`${styles.header} text-color_three bg-color_two w-full h-12 flex justify-between items-center px-9 TABLET1024:px-5  MOBILE869:h-24 MOBILE869:flex-col MOBILE869:pt-3 MOBILE869:px-4`}
		>
			<div className=' hidden MOBILE869:flex items-center justify-between w-full'>
				<h1
					className={`${styles.logo} text-base18 font-black uppercase hover:cursor-pointer hover:text-color_eight`}
					onClick={() => nav('/')}
				>
					Cryptonit
				</h1>
				<div
					className={`${styles.block__input} relative -ml-96 mr-80 flex items-center gap-1 TABLET1024:-ml-3 TABLET1024:mr-0 PK1366:-ml-20 PK1625:-ml-4 PK1300:-mr-0 `}
				>
					<img
						src='/images/icons/search.svg'
						alt='search'
						className={`${styles.icon__search} absolute left-1 w-5 h-5`}
					/>
					<input
						type='text'
						className={`${styles.input} bg-color_ten rounded-3xl w-80 h-7 text-color_three pl-7 pt-1 outline-none MOBILE869:w-52 MOBILE430:w-40`}
					/>
					<button
						className={`${styles.mbSelect} bg-color_ten rounded-3xl h-7 w-12 flex items-center gap-1 justify-center`}
					>
						<img
							src='/images/icons/search_S.svg'
							alt='searchS'
							className={`${styles.icon__searchS} w-3 h-3`}
						/>
						<img
							src='/images/icons/arrow-down.svg'
							alt='arrow'
							className={`${styles.icon__arrow} w-4 h-4`}
						/>
					</button>
				</div>
			</div>
			<h1
				className={`${styles.logo} text-base18 font-black uppercase hover:cursor-pointer hover:text-color_eight MOBILE869:hidden`}
				onClick={() => nav('/')}
			>
				Cryptonit
			</h1>
			<div
				className={`${styles.block__input} relative -ml-96 mr-80 flex items-center gap-1 TABLET1024:-ml-3 TABLET1024:mr-0 PK1366:-ml-20 PK1625:-ml-4 PK1300:-mr-0 MOBILE869:hidden`}
			>
				<img
					src='/images/icons/search.svg'
					alt='search'
					className={`${styles.icon__search} absolute left-1 w-5 h-5`}
				/>
				<input
					type='text'
					className={`${styles.input} bg-color_ten rounded-3xl w-80 h-7 text-color_three pl-7 pt-1 outline-none MOBILE869:w-52 `}
				/>
				<button
					className={`${styles.mbSelect} bg-color_ten rounded-3xl h-7 w-12 flex items-center gap-1 justify-center`}
				>
					<img
						src='/images/icons/search_S.svg'
						alt='searchS'
						className={`${styles.icon__searchS} w-3 h-3`}
					/>
					<img
						src='/images/icons/arrow-down.svg'
						alt='arrow'
						className={`${styles.icon__arrow} w-4 h-4`}
					/>
				</button>
			</div>

			<div
				className={`${styles.block__right} flex gap-12 items-center TABLET1024:gap-7 MOBILE869:justify-between MOBILE869:w-full `}
			>
				<Link
					to='/about'
					className={`${styles.link__about} text-color_three  hover:text-color_eight `}
				>
					About us
				</Link>
				<div
					className={`${styles.block__socials} flex gap-2 items-center MOBILE768:gap-1`}
				>
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
		</header>
	);
};

export default Header;
