import { useCheckWidth } from '../../../hooks/useCheckWidth';
import Footer from '../../footer/Footer';
import HandCard from '../../hand-card/HandCard';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import People from '../../people/People';
import styles from './About.module.css';

const About = () => {
	const { windowWidth } = useCheckWidth();

	const teamOne = [
		{
			id: 0,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/1.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 1,
			name: 'We make your work more comfortable!',
			position: null,
			image: null,
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '01.',
			icon: ['/images/Union.png', '/images/icons/hand.svg'],
		},
		{
			id: 2,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/2.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 3,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/3.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
	];
	const teamTwo = [
		{
			id: 0,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/3.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 2,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/4.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 3,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/1.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 1,
			name: 'We make your work more comfortable!',
			position: null,
			image: null,
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '02.',
			icon: ['/images/Union.png', '/images/icons/hand.svg'],
		},
	];
	const teamThree = [
		{
			id: 0,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/1.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 2,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/2.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
		{
			id: 1,
			name: 'We make your work more comfortable!',
			position: null,
			image: null,
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '01.',
			icon: ['/images/Union.png', '/images/icons/hand.svg'],
		},
		{
			id: 3,
			name: 'Alex. M.',
			position: 'CEO TRADeOT',
			image: '/images/team/3.png',
			description:
				'We are a team of experienced traders who have been in the market for years. Our goal is to provide you with the best tools and strategies to help you succeed.',
			num: '',
			icon: null,
		},
	];

	return (
		<Layout>
			<Header />
			<section className={styles.trusted}>
				<div className={styles.block__hello}>
					<h1>
						Trusted <span>by traders!</span>
					</h1>
					<p>
						We are a team of experienced traders who have been in the market for
						years. Our goal is to provide you with the best tools and strategies
						to help you succeed.
					</p>
				</div>
				<img
					src='/images/icons/dubble_arrow-down.svg'
					alt='arrow'
					className={styles.double__arrow}
				/>
			</section>
			<section className={styles.gentlemen}>
				<div className={styles.one}>
					<div className={styles.block__title}>
						<h2>
							<span>Gentlemen,</span> gasoline{' '}
							{windowWidth <= 375.98 && (
								<>
									<br />
								</>
							)}{' '}
							prices are starting to fall
						</h2>
					</div>
					<div className={styles.screen}></div>
				</div>
				<div className={styles.two}>
					<div className={styles.none}></div>
					<div className={styles.block__description}>
						<p className={styles.description_one}>
							We are a team of experienced traders who have been in the market
							for years. Our goal is to provide you with the best tools and
							strategies to help you succeed.
						</p>
						<p className={styles.description}>
							We are a team of experienced traders who have been in the market
							for years. Our goal is to provide you with the best tools and
							strategies to help you succeed.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.ourTeam}>
				<h2 className={styles.ourTeam__title}>Our Team</h2>
				<div className={styles.block__team}>
					<div className={styles.row__one}>
						{teamOne.map(people => {
							if (people.icon === null) {
								return <People key={people.id} data={people} />;
							} else {
								return <HandCard key={people.id} data={people} />;
							}
						})}
					</div>
					<div className={styles.row__two}>
						{teamTwo.map(people => {
							if (people.icon === null) {
								return <People key={people.id} data={people} />;
							} else {
								return <HandCard key={people.id} data={people} />;
							}
						})}
					</div>
					<div className={styles.row__three}>
						{teamThree.map(people => {
							if (people.icon === null) {
								return <People key={people.id} data={people} />;
							} else {
								return <HandCard key={people.id} data={people} />;
							}
						})}
					</div>
				</div>
			</section>
			<Footer />
		</Layout>
	);
};

export default About;
