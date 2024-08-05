// import { useState } from 'react';
// import styles from './StatisticsTest.module.css';

// const Statistics = () => {
// 	const data = [0, 1, 2];
// 	const [buttonTarget, setButtonTarget] = useState('5m');

// 	const onClick = button => {
// 		setButtonTarget(button);
// 	};

// 	return (
// 		<div className={styles.block__statistics}>
// 			<div className={styles.block__title}>
// 				<img
// 					src='/images/icons/coin_vw.svg'
// 					alt='coin'
// 					className={styles.title__coin}
// 				/>
// 				<h2 className={styles.title}>ARIS/SOL on Raydium</h2>
// 			</div>
// 			<div className={styles.block__one}>
// 				<div className={styles.block__liquidity}>
// 					<h3>Liquidity</h3>
// 					<p>$234.6</p>
// 				</div>
// 				<div className={styles.block__liquidity}>
// 					<h3>SOL pool</h3>
// 					<p>$234.6</p>
// 				</div>
// 				<div className={styles.block__liquidity}>
// 					<h3>M. Cap</h3>
// 					<p>$234.6</p>
// 				</div>
// 			</div>
// 			<div className={styles.block__two}>
// 				<div className={styles.block__title_two}>
// 					<button
// 						onClick={() => onClick('1m')}
// 						style={
// 							buttonTarget === '1m'
// 								? { backgroundColor: '#181C25', color: '#fff' }
// 								: {}
// 						}
// 					>
// 						1m<span className={styles.span_red}>-4.33%</span>
// 					</button>
// 					<button
// 						style={
// 							buttonTarget === '5m'
// 								? { backgroundColor: '#181C25', color: '#fff' }
// 								: {}
// 						}
// 						onClick={() => onClick('5m')}
// 					>
// 						5m<span className={styles.span_green}>22.4%</span>
// 					</button>
// 					<button
// 						style={
// 							buttonTarget === '1h'
// 								? { backgroundColor: '#181C25', color: '#fff' }
// 								: {}
// 						}
// 						onClick={() => onClick('1h')}
// 					>
// 						1h<span className={styles.span_red}>-1.06%</span>
// 					</button>
// 					<button
// 						style={
// 							buttonTarget === '24h'
// 								? { backgroundColor: '#181C25', color: '#fff' }
// 								: {}
// 						}
// 						onClick={() => onClick('24h')}
// 					>
// 						24h
// 						<span className={styles.span_green}>8.61%</span>
// 					</button>
// 				</div>
// 				<div className={styles.description_two}>
// 					{data.map(obj => {
// 						const TXNS =
// 							obj === 0
// 								? ['Buys', 'Sells']
// 								: obj === 1
// 								? ['Buy vol', 'Sell vol']
// 								: ['Buyers', 'Sellers'];
// 						const title = obj === 0 ? 'TXNS' : obj === 1 ? 'Volume' : 'Makers';
// 						return (
// 							<div key={obj} className={styles.obj}>
// 								<div className={styles.title__obj}>
// 									<h2 className={styles.name}>{title}</h2>
// 									<p className={styles.number}>-4.33%</p>
// 								</div>
// 								<div className={styles.greenAndRed__block}>
// 									<div className={styles.green}>
// 										<h4>{TXNS[0]}</h4>
// 										<div>
// 											<p>9.034</p>
// 										</div>
// 									</div>
// 									<div className={styles.red}>
// 										<h4>{TXNS[1]}</h4>
// 										<div>
// 											<p>6.475</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Statistics;

import { useState } from 'react';
import styles from './Statistics.module.css';

const Statistics = () => {
	const data = [0, 1, 2];
	const [buttonTarget, setButtonTarget] = useState('5m');

	const onClick = button => {
		setButtonTarget(button);
	};

	return (
		<div
			className={`${styles.block__statistics} bg-color_ten w-1/3 py-6 px-8 border-t border-solid border-color_eight MOBILE869:px-5 MOBILE869:py-5 overflow-x-hidden`}
		>
			<div
				className={`${styles.block__title} mb-4 flex gap-2 items-center justify-center`}
			>
				<img
					src='/images/icons/coin_vw.svg'
					alt='coin'
					className={`${styles.title__coin} w-6 h-6`}
				/>
				<h2
					className={`${styles.title} text-color_three text-base18 font-bold`}
				>
					ARIS/SOL on Raydium
				</h2>
			</div>
			<div
				className={`${styles.block__one} rounded-xl bg-transparent flex justify-center gap-1 MOBILE869:gap-0`}
			>
				<div
					className={`${styles.block__liquidity} bg-color_one py-3 px-7 last:rounded-r-xl first:rounded-l-xl w-40 TABLET1024:px-3 MOBILE869:py-2 MOBILE869:px-1 MOBILE869:last:border-l MOBILE869:first:border-r border-solid border-color_ten`}
				>
					<h3
						className={`${styles.block__liquidity} text-color_seven font-medium text-base16 text-center MOBILE869:text-base`}
					>
						Liquidity
					</h3>
					<p
						className={`${styles.block__liquidity} text-base24 text-color_three mt-1 font-bold text-center MOBILE869:text-base20`}
					>
						$234.6
					</p>
				</div>
				<div
					className={`${styles.block__liquidity} bg-color_one py-3 px-7 last:rounded-r-xl first:rounded-l-xl w-40 TABLET1024:px-3 MOBILE869:py-2 MOBILE869:px-1 MOBILE869:last:border-l MOBILE869:first:border-r border-solid border-color_ten`}
				>
					<h3
						className={`${styles.block__liquidity} text-color_seven font-medium text-base16 text-center MOBILE869:text-base`}
					>
						SOL pool
					</h3>
					<p
						className={`${styles.block__liquidity} text-base24 text-color_three mt-1 font-bold text-center MOBILE869:text-base20`}
					>
						$234.6
					</p>
				</div>
				<div
					className={`${styles.block__liquidity} bg-color_one py-3 px-7 last:rounded-r-xl first:rounded-l-xl w-40 TABLET1024:px-3 MOBILE869:py-2 MOBILE869:px-1 MOBILE869:last:border-l MOBILE869:first:border-r border-solid border-color_ten`}
				>
					<h3
						className={`${styles.block__liquidity} text-color_seven font-medium text-base16 text-center MOBILE869:text-base`}
					>
						M. Cap
					</h3>
					<p
						className={`${styles.block__liquidity} text-base24 text-color_three mt-1 font-bold text-center MOBILE869:text-base20`}
					>
						$234.6
					</p>
				</div>
			</div>
			<div className={`${styles.block__two} rounded-xl mt-3`}>
				<div className={`${styles.block__title_two} flex w-full`}>
					<button
						onClick={() => onClick('1m')}
						className={`${styles.block__title_two} w-1/4 h-14 bg-color_ten border-solid border border-color_one first:rounded-tl-xl last:rounded-tr-xl text-color_seven`}
						style={
							buttonTarget === '1m'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
					>
						1m
						<span className={`${styles.span_red} block`}>-4.33%</span>
					</button>
					<button
						onClick={() => onClick('5m')}
						className={`${styles.block__title_two} w-1/4 h-14 bg-color_ten border-solid border border-color_one first:rounded-tl-xl last:rounded-tr-xl text-color_seven`}
						style={
							buttonTarget === '5m'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
					>
						5m
						<span className={`${styles.span_green} block`}>22.4%</span>
					</button>
					<button
						onClick={() => onClick('1h')}
						className={`${styles.block__title_two} w-1/4 h-14 bg-color_ten border-solid border border-color_one first:rounded-tl-xl last:rounded-tr-xl text-color_seven`}
						style={
							buttonTarget === '1h'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
					>
						1h
						<span className={`${styles.span_red} block`}>-1.06%</span>
					</button>
					<button
						onClick={() => onClick('24h')}
						className={`${styles.block__title_two} w-1/4 h-14 bg-color_ten border-solid border border-color_one first:rounded-tl-xl last:rounded-tr-xl text-color_seven`}
						style={
							buttonTarget === '24h'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
					>
						24h
						<span className={`${styles.span_green} block`}>8.61%</span>
					</button>
				</div>
				<div
					className={`${styles.description_two} bg-color_one rounded-b-xl p-5 flex flex-col gap-5`}
				>
					{data.map(obj => {
						const TXNS =
							obj === 0
								? ['Buys', 'Sells']
								: obj === 1
								? ['Buy vol', 'Sell vol']
								: ['Buyers', 'Sellers'];
						const title = obj === 0 ? 'TXNS' : obj === 1 ? 'Volume' : 'Makers';
						return (
							<div
								key={obj}
								className={`${styles.obj} flex MOBILE869:flex-col MOBILE869:gap-1`}
							>
								<div
									className={`${styles.title__obj} w-1/4 border-r border-solid border-color_nine pr-8 MOBILE869:w-full MOBILE869:border-none MOBILE869:flex MOBILE869:items-center MOBILE869:justify-between MOBILE869:pr-0`}
								>
									<h2
										className={`${styles.name} text-color_seven font-medium text-base16 MOBILE869:text-base`}
									>
										{title}
									</h2>
									<p
										className={`${styles.number} text-color_three font-bold text-base18 MOBILE869:text-base16`}
									>
										-4.33%
									</p>
								</div>
								<div
									className={`${styles.greenAndRed__block} pl-4 flex gap-1 w-full MOBILE869:pl-0`}
								>
									<div className={`${styles.green} w-2/3`}>
										<h4
											className={`${styles.green} text-color_seven font-medium text-base16 mb-1`}
										>
											{TXNS[0]}
										</h4>
										<div
											className={`${styles.green} font-bold text-base13 text-color_two bg-color_five rounded-l-2xl rounded-r-md pl-3`}
										>
											<p>9.034</p>
										</div>
									</div>
									<div className={`${styles.red} w-1/3`}>
										<h4
											className={`${styles.red} text-color_seven font-medium text-base16 mb-1`}
										>
											{TXNS[1]}
										</h4>
										<div
											className={`${styles.red} font-bold text-base13 text-color_three bg-color_six rounded-r-2xl rounded-l-md pr-3 text-end`}
										>
											<p>6.475</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Statistics;
