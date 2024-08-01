import styles from './HandCard.module.css';

const HandCard = ({ data }) => {
	return (
		<div className={styles.block__handCard}>
			<div className={styles.block__num}>
				<div className={styles.block__hand}>
					<img src={data.icon[1]} alt='image' className={styles.hand} />
				</div>
				<p className={styles.num}>{data.num}</p>
			</div>
			<div className={styles.block__description}>
				<h2 className={styles.title}>{data.name}</h2>
				<p className={styles.description}>{data.description}</p>
			</div>
		</div>
	);
};

export default HandCard;
