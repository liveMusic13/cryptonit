import { useCheckWidth } from '../../../hooks/useCheckWidth';
import Footer from '../../footer/Footer';
import HandCard from '../../hand-card/HandCard';
import Header from '../../header/Header';
import Layout from '../../layout/Layout';
import People from '../../people/People';
import styles from './About.module.css';
// import styles from './AboutTest.module.css';

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
			<section
				className={`${styles.trusted} bg-[url('/images/bg_about.jpg')] bg-no-repeat bg-cover bg-center w-full h-3/4 pl-24 pt-36 relative PK1625:pl-5 PK1625:pt-14 PK1625:h-full MOBILE869:pt-7 MOBILE869:pl-4`}
			>
				<div
					className={`${styles.block__hello} flex gap-44 PK1625:flex-col PK1625:gap-14 PK1625:min-h-96`}
				>
					<h1 className='text-base160 text-color_five font-black MOBILE869:text-base52'>
						Trusted{' '}
						<span className='block text-color_three -mt-16 MOBILE869:-mt-5'>
							by traders!
						</span>
					</h1>
					<p className='w-1/3 font-medium text-color_three text-base20 mt-60 PK1625:mt-0 MOBILE869:text-base16 MOBILE869:w-80 MOBILE869:ml-2'>
						We are a team of experienced traders who have been in the market for
						years. Our goal is to provide you with the best tools and strategies
						to help you succeed.
					</p>
				</div>
				<img
					src='/images/icons/dubble_arrow-down.svg'
					alt='arrow'
					className='w-24 h-24 absolute left-1/2 bottom-16 MOBILE869:left-1/3'
				/>
			</section>
			<section
				className={`${styles.gentlemen} bg-[url('/images/bg_gentlemen.jpg')] bg-no-repeat bg-cover bg-center w-full h-3/4 MOBILE869:h-auto flex PK1625:block PK1625:h-auto`}
			>
				<div className='w-1/2 PK1625:w-full'>
					<div
						className={`${styles.block__title} border-solid border-r border-b border-color_three h-1/3 w-full flex justify-center items-center PK1625:border-none PK1625:pt-20 PK1625:pb-14 PK1625:pl-5 MOBILE869:pt-7 MOBILE869:pl-4 MOBILE869:pb-10`}
					>
						<h2 className='text-base72 text-color_three font-black MOBILE869:text-base36 MOBILE869:leading-9'>
							<span className='text-color_five'>Gentlemen,</span> gasoline{' '}
							<br className='block MOBILE375:hidden' />
							prices are starting to fall
						</h2>
					</div>
					<div className="h-2/3 w-full border-solid border-r border-color_three bg-[url('/images/bg_screen.png')] bg-no-repeat bg-cover bg-center PK1625:border-none PK1625:h-96 MOBILE869:bg-[url('/images/bg_screen_mobile.png')] MOBILE869:bg-contain MOBILE869:-mt-20 MOBILE768:w-full MOBILE869:mt-0"></div>
				</div>
				<div className='w-1/2 PK1625:w-full'>
					<div className='h-1/3 w-full PK1625:hidden MOBILE869:hidden'></div>
					<div
						className={`${styles.block__description} h-2/3 w-full border-solid border-t border-color_three text-base20 text-color_three flex flex-col gap-5 items-center justify-center PK1625:border-none PK1625:py-12 MOBILE869:pt-0 MOBILE869:-mt-12 MOBILE869:px-4 MOBILE869:mt-5`}
					>
						<p className='font-bold max-w-lg PK1625:text-center'>
							We are a team of experienced traders who have been in the market
							for years. Our goal is to provide you with the best tools and
							strategies to help you succeed.
						</p>
						<p className='font-medium max-w-lg PK1625:text-center'>
							We are a team of experienced traders who have been in the market
							for years. Our goal is to provide you with the best tools and
							strategies to help you succeed.
						</p>
					</div>
				</div>
			</section>
			<section
				className={`${styles.ourTeam} bg-color_ten pt-28 flex flex-col gap-16 items-center MOBILE869:pt-9 MOBILE869:gap-5`}
			>
				<h2 className='font-black text-base160 text-color_three MOBILE869:text-base52'>
					Our Team
				</h2>
				<div className='w-full bg-color_ten border-t border-b border-color_one border-solid px-9 mb-5'>
					<div className='flex PK1625:overflow-x-auto PK1625:border-r PK1625:border-color_one PK1625:border-solid MOBILE869:border-none'>
						{teamOne.map(people =>
							people.icon === null ? (
								<People key={people.id} data={people} />
							) : (
								<HandCard key={people.id} data={people} />
							)
						)}
					</div>
					<div className='flex PK1625:overflow-x-auto PK1625:border-r PK1625:border-color_one PK1625:border-solid MOBILE869:border-none'>
						{teamTwo.map(people =>
							people.icon === null ? (
								<People key={people.id} data={people} />
							) : (
								<HandCard key={people.id} data={people} />
							)
						)}
					</div>
					<div className='flex PK1625:overflow-x-auto PK1625:border-r PK1625:border-color_one PK1625:border-solid MOBILE869:border-none'>
						{teamThree.map(people =>
							people.icon === null ? (
								<People key={people.id} data={people} />
							) : (
								<HandCard key={people.id} data={people} />
							)
						)}
					</div>
				</div>
			</section>
			<Footer />
		</Layout>
	);
};

export default About;
