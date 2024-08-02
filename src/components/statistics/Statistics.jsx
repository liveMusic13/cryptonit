import { useState } from 'react';
import styles from './StatisticsTest.module.css';

const Statistics = () => {
	const data = [0, 1, 2];
	const [buttonTarget, setButtonTarget] = useState('5m');

	const onClick = button => {
		setButtonTarget(button);
	};

	return (
		<div className={styles.block__statistics}>
			<div className={styles.block__title}>
				<img
					src='/images/icons/coin_vw.svg'
					alt='coin'
					className={styles.title__coin}
				/>
				<h2 className={styles.title}>ARIS/SOL on Raydium</h2>
			</div>
			<div className={styles.block__one}>
				<div className={styles.block__liquidity}>
					<h3>Liquidity</h3>
					<p>$234.6</p>
				</div>
				<div className={styles.block__liquidity}>
					<h3>SOL pool</h3>
					<p>$234.6</p>
				</div>
				<div className={styles.block__liquidity}>
					<h3>M. Cap</h3>
					<p>$234.6</p>
				</div>
			</div>
			<div className={styles.block__two}>
				<div className={styles.block__title_two}>
					<button
						onClick={() => onClick('1m')}
						style={
							buttonTarget === '1m'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
					>
						1m<span className={styles.span_red}>-4.33%</span>
					</button>
					<button
						style={
							buttonTarget === '5m'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
						onClick={() => onClick('5m')}
					>
						5m<span className={styles.span_green}>22.4%</span>
					</button>
					<button
						style={
							buttonTarget === '1h'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
						onClick={() => onClick('1h')}
					>
						1h<span className={styles.span_red}>-1.06%</span>
					</button>
					<button
						style={
							buttonTarget === '24h'
								? { backgroundColor: '#181C25', color: '#fff' }
								: {}
						}
						onClick={() => onClick('24h')}
					>
						24h
						<span className={styles.span_green}>8.61%</span>
					</button>
				</div>
				<div className={styles.description_two}>
					{data.map(obj => {
						const TXNS =
							obj === 0
								? ['Buys', 'Sells']
								: obj === 1
								? ['Buy vol', 'Sell vol']
								: ['Buyers', 'Sellers'];
						const title = obj === 0 ? 'TXNS' : obj === 1 ? 'Volume' : 'Makers';
						return (
							<div key={obj} className={styles.obj}>
								<div className={styles.title__obj}>
									<h2 className={styles.name}>{title}</h2>
									<p className={styles.number}>-4.33%</p>
								</div>
								<div className={styles.greenAndRed__block}>
									<div className={styles.green}>
										<h4>{TXNS[0]}</h4>
										<div>
											<p>9.034</p>
										</div>
									</div>
									<div className={styles.red}>
										<h4>{TXNS[1]}</h4>
										<div>
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
