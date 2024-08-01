import styles from './People.module.css';

const People = ({ data }) => {
	console.log(data);
	return (
		<div className={styles.block__people}>
			<img src={data.image} alt='image' className={styles.photo} />
			<div className={styles.block__description}>
				<div className={styles.block__title}>
					<h2 className={styles.name}>{data.name}</h2>
					<div className={styles.block__position}>
						<div className={styles.circle}></div>
						<p className={styles.position}>{data.position}</p>
					</div>
				</div>
				<p className={styles.description}>{data.description}</p>
			</div>
		</div>
	);
};

export default People;
