import styles from './People.module.css';

const People = ({ data }) => {
	return (
		<div
			className={`${styles.block__people} w-1/4 p-7 bg-color_ten border border-color_one border-solid flex flex-col gap-5 items-center TABLET1024:min-w-80 MOBILE375:border-none`}
		>
			<img
				src={data.image}
				alt='image'
				className={`${styles.photo} w-64 TABLET1024:w-56`}
			/>
			<div className={`${styles.block__description} flex flex-col gap-4`}>
				<div
					className={`${styles.block__title} flex justify-between items-center w-full TABLET1024:flex-col TABLET1024:items-start TABLET1024:gap-1`}
				>
					<h2
						className={`${styles.name} text-color_three font-bold text-base24`}
					>
						{data.name}
					</h2>
					<div
						className={`${styles.block__position} flex gap-2 items-center rounded-l-3xl rounded-r-md bg-color_one py-1 px-3`}
					>
						<div
							className={`${styles.circle} w-2 h-2 rounded-2xl bg-color_five`}
						></div>
						<p
							className={`${styles.position} font-bold text-base20 text-color_five`}
						>
							{data.position}
						</p>
					</div>
				</div>
				<p
					className={`${styles.description} font-medium text-color_seven text-base16`}
				>
					{data.description}
				</p>
			</div>
		</div>
	);
};

export default People;
