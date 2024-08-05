// import { useCheckWidth } from '../../hooks/useCheckWidth';
// import Statistics from '../statistics/Statistics';
// import TopHolders from '../top-holders/TopHolders';
// import LeftInterface from '../ui/left-interface/LeftInterface';
// import styles from './ContentTest.module.css';

// const Content = () => {
// 	const { windowWidth } = useCheckWidth();

// 	return (
// 		<div className={styles.wrapper_content}>
// 			<LeftInterface />
// 			<div className={styles.block__content}>
// 				{windowWidth <= 1024.98 ? (
// 					<img
// 						src='/images/mock_graph1024.png'
// 						alt='mock_graph'
// 						className={styles.mock__image}
// 					/>
// 				) : (
// 					<div className={styles.mock__image}></div>
// 				)}

// 				{/* <div className={styles.mock__image}></div> */}
// 				<div className={styles.block__information}>
// 					{/* {windowWidth <= 375.98 && <Statistics />} */}
// 					{windowWidth <= 624.98 && <Statistics />}
// 					<TopHolders />

// 					{/* {windowWidth >= 375.98 && <Statistics />} */}
// 					{windowWidth >= 624.98 && <Statistics />}
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Content;

import { useCheckWidth } from '../../hooks/useCheckWidth';
import Statistics from '../statistics/Statistics';
import TopHolders from '../top-holders/TopHolders';
import LeftInterface from '../ui/left-interface/LeftInterface';
import styles from './Content.module.css';

const Content = () => {
	const { windowWidth } = useCheckWidth();

	return (
		<div
			className={`${styles.wrapper_content} flex w-full h-full overflow-hidden MOBILE624:overflow-y-auto MOBILE624:overflow-x-hidden`}
		>
			<LeftInterface />
			<div
				className={`${styles.block__content} w-full relative MOBILE624:bg-color_ten h-full`}
			>
				{windowWidth <= 1024.98 ? (
					<img
						src='/images/mock_graph1024.png'
						alt='mock_graph'
						className={`${styles.mock__image} w-full h-1/2 bg-[url('/images/mock_graph.png')] bg-no-repeat bg-cover bg-center PK1366:bg-[url('/images/mock_graph1366.png')] TABLET1024:bg-[url('/images/mock_graph1024.png')]`}
					/>
				) : (
					<div
						className={`${styles.mock__image} w-full h-1/2 bg-[url('/images/mock_graph.png')] bg-no-repeat bg-cover bg-center PK1366:bg-[url('/images/mock_graph1366.png')] TABLET1024:bg-[url('/images/mock_graph1024.png')]`}
					></div>
				)}
				<div
					className={`${styles.block__information} flex h-1/2 overflow-hidden TABLET1024:pl-16 MOBILE624:flex-col MOBILE624:bg-color_ten MOBILE624:h-full`}
				>
					{windowWidth <= 624.98 && <Statistics />}
					<TopHolders />
					{windowWidth >= 624.98 && <Statistics />}
				</div>
			</div>
		</div>
	);
};

export default Content;
