import { useCheckWidth } from '../../hooks/useCheckWidth';
import Statistics from '../statistics/Statistics';
import TopHolders from '../top-holders/TopHolders';
import LeftInterface from '../ui/left-interface/LeftInterface';
import styles from './Content.module.css';

const Content = () => {
	const { windowWidth } = useCheckWidth();

	return (
		<div className={styles.wrapper_content}>
			<LeftInterface />
			<div className={styles.block__content}>
				{windowWidth <= 1024.98 ? (
					<img
						src='/images/mock_graph1024.png'
						alt='mock_graph'
						className={styles.mock__image}
					/>
				) : (
					<div className={styles.mock__image}></div>
				)}

				{/* <div className={styles.mock__image}></div> */}
				<div className={styles.block__information}>
					{windowWidth <= 375.98 && <Statistics />}
					<TopHolders />
					{/* {windowWidth >= 767.98 && <Statistics />} */}
					{windowWidth >= 375.98 && <Statistics />}
				</div>
			</div>
		</div>
	);
};

export default Content;
