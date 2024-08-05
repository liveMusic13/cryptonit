import styles from './HandCard.module.css';

const HandCard = ({ data }) => {
	return (
		<div
			className={`${styles.block__handCard} w-1/4 p-7 border border-color_one border-solid flex flex-col gap-32 items-center pt-5 pr-12 pb-12 pl-5 bg-color_two TABLET1024:min-w-80 MOBILE375:border-none`}
		>
			<div className={`${styles.block__num} w-full flex justify-between`}>
				<div
					className={`${styles.block__hand} bg-[url('/images/Union.png')] bg-no-repeat bg-cover bg-center w-44 h-44 flex items-center justify-center`}
				>
					<img
						src={data.icon[1]}
						alt='image'
						className={`${styles.hand} w-9 h-9`}
					/>
				</div>
				<p className={`${styles.num} text-color_five font-sans text-base24`}>
					{data.num}
				</p>
			</div>
			<div className={`${styles.block__description}`}>
				<h2
					className={`${styles.title} mb-5 font-bold text-color_three text-base24`}
				>
					{data.name}
				</h2>
				<p
					className={`${styles.description} text-color_seven font-medium text-base16`}
				>
					{data.description}
				</p>
			</div>
		</div>
	);
};

export default HandCard;
