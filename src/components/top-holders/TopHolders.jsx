import { useCheckWidth } from '../../hooks/useCheckWidth';
import styles from './TopHolders.module.css';

const TopHolders = () => {
	const { windowWidth } = useCheckWidth();

	const data = [
		{
			id: 0,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
		{
			id: 1,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
		{
			id: 2,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
		{
			id: 3,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
		{
			id: 4,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
		{
			id: 5,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
		{
			id: 6,
			name: '7DSF9HIU34...278FHA',
			precent: 10.3,
			amount: '352.3 M',
			market: '$ 234.6K',
		},
	];

	const dataTitle = [
		{
			id: 0,
			title: 'Account',
			img: '/images/icons/account.svg',
			width: '205',
		},
		{
			id: 1,
			title: 'Precent',
			img: '/images/icons/precent.svg',
			width: '235',
		},
		{
			id: 2,
			title: 'Amount',
			img: '/images/icons/amount.svg',
			width: '235',
		},
		{
			id: 3,
			title: 'Market value',
			img: '/images/icons/market.svg',
			width: '415',
		},
	];

	// return (
	// 	<div className={styles.wrapper_holders}>
	// 		<h2 className={styles.title}>Top holders</h2>
	// 		{windowWidth <= 869.98 ? (
	// 			<div className={styles.block__table_mini}>
	// 				{data.map(obj => (
	// 					<div key={obj.id} className={styles.object}>
	// 						<div className={styles.acc}>
	// 							<h4>
	// 								<img src='/images/icons/account.svg' alt='account' />
	// 								Account
	// 							</h4>
	// 							<p>7DSF9HIU34...27</p>
	// 						</div>
	// 						<div className={styles.block__two_mini}>
	// 							<div className={styles.row__one}>
	// 								<img src='/images/icons/precent.svg' alt='precent' />
	// 								<p>{obj.precent}</p>
	// 							</div>
	// 							<div className={styles.row__two}>
	// 								<img src='/images/icons/amount.svg' alt='amount' />
	// 								<p>{obj.amount}</p>
	// 							</div>
	// 						</div>
	// 						<div className={styles.block__market_mini}>
	// 							<h4>
	// 								<img src='/images/icons/market.svg' alt='market' />
	// 								Market value
	// 							</h4>
	// 							<p>{obj.market}</p>
	// 						</div>
	// 					</div>
	// 				))}
	// 			</div>
	// 		) : (
	// 			<div className={styles.block__table}>
	// 				<div className={styles.block__title}>
	// 					{dataTitle.map(obj => (
	// 						<div className={styles.block__column} key={obj.id}>
	// 							<img src={obj.img} alt={obj.title} />
	// 							<h3>{obj.title}</h3>
	// 						</div>
	// 					))}
	// 				</div>
	// 				{data.map(obj => (
	// 					<div key={obj.id} className={styles.object}>
	// 						<h4>{obj.name}</h4> <p>{obj.precent}</p> <p>{obj.amount}</p>
	// 						<p>{obj.market}</p>
	// 					</div>
	// 				))}
	// 			</div>
	// 		)}
	// 	</div>
	// );
	return (
		<div
			className={`${styles.wrapper_holders} scrollbar-custom border border-color_eight border-solid bg-color_two w-2/3`}
		>
			<h2
				className={`${styles.title} w-full py-5 px-8 text-color_three font-bold text-base18 bg-color_ten`}
			>
				Top holders
			</h2>
			{windowWidth <= 869.98 ? (
				<div className={`${styles.block__table_mini}`}>
					{data.map(obj => (
						<div
							key={obj.id}
							className={`${styles.object} text-base text-color_three border-y border-solid border-color_one flex py-5 px-5 gap-6 MOBILE624:flex-wrap`}
						>
							<div className={`${styles.acc}`}>
								<h4 className='text-base text-color_seven uppercase flex items-center gap-1 mb-1'>
									<img
										src='/images/icons/account.svg'
										alt='account'
										className='w-5 h-5'
									/>
									Account
								</h4>
								<p className='text-color_four'>7DSF9HIU34...27</p>
							</div>
							<div className={`${styles.block__two_mini}`}>
								<div className='mb-1 flex'>
									<img
										src='/images/icons/precent.svg'
										alt='precent'
										className='w-5 h-5 mr-1'
									/>
									<p>{obj.precent}</p>
								</div>
								<div className='flex'>
									<img
										src='/images/icons/amount.svg'
										alt='amount'
										className='w-5 h-5 mr-1'
									/>
									<p>{obj.amount}</p>
								</div>
							</div>
							<div className={`${styles.block__market_mini}`}>
								<h4 className='text-base text-color_seven uppercase flex items-center gap-1 mb-1'>
									<img
										src='/images/icons/market.svg'
										alt='market'
										className='w-5 h-5 mr-1'
									/>
									Market value
								</h4>
								<p>{obj.market}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={`${styles.block__table}`}>
					<div className={`${styles.block__title} flex`}>
						{dataTitle.map(obj => (
							<div
								className='flex gap-1 items-center py-4 px-7 border border-color_one border-solid last:w-auto first:w-52 [&:nth-child(3)]:w-56 [&:nth-child(2)]:w-56 last:w-auto first:w-52 flex gap-1 items-center py-4 px-7 border border-color_one border-solid PK1625:[&:nth-child(2)]:w-32 PK1625:[&:nth-child(3)]:w-32 PK1625:first:w-44 PK1625:px-5 PK1625:last:w-56'
								key={obj.id}
							>
								<img src={obj.img} alt={obj.title} className='w-5 h-5 mr-1' />
								<h3 className='text-color_seven uppercase text-base font-medium'>
									{obj.title}
								</h3>
							</div>
						))}
					</div>
					{data.map(obj => (
						<div
							key={obj.id}
							className='text-base text-color_three border-y border-solid border-color_one flex py-4 px-7'
						>
							<h4 className='text-color_four w-52'>{obj.name}</h4>
							<p className='first:w-56 [&:nth-child(2)]:w-56 [&:nth-child(3)]:w-56 [&:nth-child(4)]:pl-12 PK1625:[&:nth-child(2)]:w-32 PK1625:[&:nth-child(3)]:w-32 PK1625:first:w-44'>
								{obj.precent}
							</p>
							<p className='first:w-56 [&:nth-child(2)]:w-56 [&:nth-child(3)]:w-56 [&:nth-child(4)]:pl-12 PK1625:[&:nth-child(2)]:w-32 PK1625:[&:nth-child(3)]:w-32 PK1625:first:w-44'>
								{obj.amount}
							</p>
							<p className='first:w-56 [&:nth-child(2)]:w-56 [&:nth-child(3)]:w-56 [&:nth-child(4)]:pl-12 PK1625:[&:nth-child(2)]:w-32 PK1625:[&:nth-child(3)]:w-32 PK1625:first:w-44'>
								{obj.market}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default TopHolders;
