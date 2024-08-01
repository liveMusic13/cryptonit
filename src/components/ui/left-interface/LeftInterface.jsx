import { useState } from 'react';
import styles from './LeftInterface.module.css';

const LeftInterface = () => {
	const [isViewInterface, setIsViewInterface] = useState(false);
	const coinArray = [
		{
			id: 0,
			name: 'noah',
			middle: [
				['txt', '$0.043454'],
				['ps', '143.57'],
				['created', '2d'],
			],
			end: [
				['chain', '/images/icons/search_S.svg'],
				['pair', ' 7DSF9HIU34...278FHA'],
				['omg', '734...278FHA'],
				['raydium', 'V4'],
			],
			img: '/images/icons/coin_vw.svg',
		},
		{
			id: 1,
			name: 'noah',
			middle: [
				['txt', '$0.043454'],
				['ps', '143.57'],
				['created', '2d'],
			],
			end: [
				['chain', '/images/icons/search_S.svg'],
				['pair', ' 7DSF9HIU34...278FHA'],
				['omg', '734...278FHA'],
				['raydium', 'V4'],
			],
			img: '/images/icons/coin_vw.svg',
		},
		{
			id: 2,
			name: 'noah',
			middle: [
				['txt', '$0.043454'],
				['ps', '143.57'],
				['created', '2d'],
			],
			end: [
				['chain', '/images/icons/search_S.svg'],
				['pair', ' 7DSF9HIU34...278FHA'],
				['omg', '734...278FHA'],
				['raydium', 'V4'],
			],
			img: '/images/icons/coin_vw.svg',
		},
		{
			id: 3,
			name: 'noah',
			middle: [
				['txt', '$0.043454'],
				['ps', '143.57'],
				['created', '2d'],
			],
			end: [
				['chain', '/images/icons/search_S.svg'],
				['pair', ' 7DSF9HIU34...278FHA'],
				['omg', '734...278FHA'],
				['raydium', 'V4'],
			],
			img: '/images/icons/coin_vw.svg',
		},
	];

	const array =
		window.innerWidth <= 1366.98 ? coinArray.slice(0, -1) : coinArray;

	const miniCoin = [1, 2, 3, 4, 5];

	// console.log(window.innerWidth, window.innerWidth <= 1024.98);

	return (
		<>
			{window.innerWidth <= 1024.98 && !isViewInterface ? (
				<div className={styles.block__interface_mini}>
					<button
						className={styles.button__open}
						onClick={() => setIsViewInterface(!isViewInterface)}
					>
						<img src='/images/icons/arrow_right.svg' alt='arrow' />
					</button>
					<img
						src='/images/icons/paper.svg'
						alt='paper'
						className={styles.title__image}
					/>
					<div className={styles.block__coins_mini}>
						{miniCoin.map(coin => (
							<img
								key={coin}
								src='/images/icons/coin_vw.svg'
								alt='coin'
								className={styles.mini__coin}
							/>
						))}
					</div>
				</div>
			) : (
				<div
					className={styles.block__interface}
					style={
						window.innerWidth <= 1024.98 && isViewInterface
							? {
									position: 'absolute',
									zIndex: '30',
									width: '380px',
									boxShadow: '20px 0px 44px black',
							  }
							: {}
					}
				>
					{window.innerWidth <= 1024.98 && isViewInterface && (
						<button
							className={styles.button__open}
							onClick={() => setIsViewInterface(!isViewInterface)}
							style={
								window.innerWidth <= 375.98 && isViewInterface
									? { right: '12px' }
									: {}
							}
						>
							<img
								src={
									isViewInterface
										? '/images/icons/arrow_left.svg'
										: '/images/icons/arrow_right.svg'
								}
								alt='arrow'
							/>
						</button>
					)}
					{window.innerWidth <= 1024.98 && isViewInterface && (
						<div className={styles.block1024}>
							<img
								src='/images/icons/paper.svg'
								alt='paper'
								className={styles.title__image_1024}
							/>
							<h2 className={styles.title}>List of tokens</h2>
						</div>
					)}
					{window.innerWidth >= 1024.98 && (
						<h2 className={styles.title}>List of tokens</h2>
					)}
					<div className={styles.block__tokens}>
						{array.map(block => (
							<div key={block.id} className={styles.block__token}>
								<div className={styles.block__title}>
									<img
										src={block.img}
										alt='coin'
										className={styles.icon__image}
									/>
									<h2 className={styles.title__coin}>{block.name}</h2>
								</div>
								<div className={styles.block__middle}>
									{block.middle.map(item => (
										<div key={Math.random()} className={styles.elem}>
											<h3>{item[0]}</h3>
											<p>{item[1]}</p>
										</div>
									))}
								</div>
								<div className={styles.block__end}>
									{block.end.map((elem, index) => {
										if (index === 0) {
											return (
												<p
													key={Math.random()}
													className={styles.end__paragraph}
												>
													{elem[0]}: <img src={elem[1]} alt='image' />
												</p>
											);
										} else {
											return (
												<p
													key={Math.random()}
													className={styles.end__paragraph}
												>
													{elem[0]}: {elem[1]}
												</p>
											);
										}
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default LeftInterface;
