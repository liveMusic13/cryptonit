import { useState } from 'react';
import { useCheckWidth } from '../../../hooks/useCheckWidth';
import styles from './LeftInterface.module.css';

const LeftInterface = () => {
	const { windowWidth } = useCheckWidth();
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

	const array = windowWidth <= 1366.98 ? coinArray.slice(0, -1) : coinArray;

	const miniCoin = [1, 2, 3, 4, 5];

	// console.log(windowWidth, windowWidth <= 1024.98);

	return (
		<>
			{windowWidth <= 1024.98 && !isViewInterface ? (
				<div
					className={`${styles.block__interface_mini} w-16 bg-color_ten border-r border-color_eight border-solid p-3 absolute z-10 h-full`}
				>
					<button
						className={`${styles.button__open} w-8 h-8 bg-color_ten rounded-3xl border border-color_eight border-solid absolute z-30 top-4 -right-4 flex items-center justify-center`}
						onClick={() => setIsViewInterface(!isViewInterface)}
						style={{ boxShadow: '0px 4px 24px black' }}
					>
						<img
							src='/images/icons/arrow_right.svg'
							alt='arrow'
							className='w-6 h-6'
						/>
					</button>
					<img
						src='/images/icons/paper.svg'
						alt='paper'
						className={`${styles.title__image} w-10 h-10 mb-14`}
					/>
					<div className={`${styles.block__coins_mini} flex flex-col gap-7`}>
						{miniCoin.map(coin => (
							<img
								key={coin}
								src='/images/icons/coin_vw.svg'
								alt='coin'
								className={`${styles.mini__coin} w-10 h-10`}
							/>
						))}
					</div>
				</div>
			) : (
				<div
					className={`${styles.block__interface} w-80 h-full py-7 bg-color_ten text-color_seven border-r border-color_eight border-solid PK1366:w-60 relative MOBILE375:w-full`}
					style={
						windowWidth <= 1024.98 && isViewInterface
							? {
									position: 'absolute',
									zIndex: '30',
									width: '380px',
									boxShadow: '20px 0px 44px black',
							  }
							: {}
					}
				>
					{windowWidth <= 1024.98 && isViewInterface && (
						<button
							className={`${styles.button__open} w-8 h-8 bg-color_ten rounded-3xl border border-color_eight border-solid absolute z-30 top-4 -right-4 flex items-center justify-center`}
							onClick={() => setIsViewInterface(!isViewInterface)}
							style={
								windowWidth <= 375.98 && isViewInterface
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
								className='w-6 h-6'
							/>
						</button>
					)}
					{windowWidth <= 1024.98 && isViewInterface && (
						<div className={`${styles.block1024} flex gap-4 px-7 items-center`}>
							<img
								src='/images/icons/paper.svg'
								alt='paper'
								className={`${styles.title__image_1024} w-10 h-10`}
							/>
							<h2
								className={`${styles.title} text-base18 font-bold text-color_three px-0`}
							>
								List of tokens
							</h2>
						</div>
					)}
					{windowWidth >= 1024.98 && (
						<h2
							className={`${styles.title} text-base18 font-bold text-color_three px-8`}
						>
							List of tokens
						</h2>
					)}
					<div
						className={`${styles.block__tokens} flex flex-col PK1366:overflow-y-auto`}
					>
						{array.map(block => (
							<div
								key={block.id}
								className={`${styles.block__token} border-b border-color_one py-7 border-solid px-8 PK1366:pb-3`}
							>
								<div
									className={`${styles.block__title} flex gap-2 mb-3 MOBILE768:items-center`}
								>
									<img
										src={block.img}
										alt='coin'
										className={`${styles.icon__image} w-10 h-10`}
									/>
									<h2
										className={`${styles.title__coin} text-base16 font-bold text-color_three`}
									>
										{block.name}
									</h2>
								</div>
								<div
									className={`${styles.block__middle} flex justify-between items-center PK1366:flex-wrap`}
								>
									{block.middle.map(item => (
										<div key={Math.random()} className={styles.elem}>
											<h3 className='text-base font-medium'>{item[0]}</h3>
											<p className='text-color_three text-base16 font-medium'>
												{item[1]}
											</p>
										</div>
									))}
								</div>
								<div
									className={`${styles.block__end} flex gap-x-3 flex-wrap mt-3`}
								>
									{block.end.map((elem, index) => {
										if (index === 0) {
											return (
												<p
													key={Math.random()}
													className={`${styles.end__paragraph} text-base font-medium`}
												>
													{elem[0]}:{' '}
													<img src={elem[1]} alt='image' className='w-3 h-3' />
												</p>
											);
										} else {
											return (
												<p
													key={Math.random()}
													className={`${styles.end__paragraph} text-base font-medium`}
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
