import styles from './TopHolders.module.css';

const TopHolders = () => {
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

	return (
		<div className={styles.wrapper_holders}>
			<h2 className={styles.title}>Top holders</h2>
			{window.innerWidth <= 768.98 ? (
				<div className={styles.block__table_mini}>
					{data.map(obj => (
						<div key={obj.id} className={styles.object}>
							<div className={styles.acc}>
								<h4>
									<img src='/images/icons/account.svg' alt='account' />
									Account
								</h4>
								<p>7DSF9HIU34...27</p>
							</div>
							<div className={styles.block__two_mini}>
								<div className={styles.row__one}>
									<img src='/images/icons/precent.svg' alt='precent' />
									<p>{obj.precent}</p>
								</div>
								<div className={styles.row__two}>
									<img src='/images/icons/amount.svg' alt='amount' />
									<p>{obj.amount}</p>
								</div>
							</div>
							<div className={styles.block__market_mini}>
								<h4>
									<img src='/images/icons/market.svg' alt='market' />
									Market value
								</h4>
								<p>{obj.market}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={styles.block__table}>
					<div className={styles.block__title}>
						{dataTitle.map(obj => (
							<div className={styles.block__column} key={obj.id}>
								<img src={obj.img} alt={obj.title} />
								<h3>{obj.title}</h3>
							</div>
						))}
					</div>
					{data.map(obj => (
						<div key={obj.id} className={styles.object}>
							<h4>{obj.name}</h4> <p>{obj.precent}</p> <p>{obj.amount}</p>
							<p>{obj.market}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default TopHolders;
