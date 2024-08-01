import About from '../components/screens/about/About';
import Home from '../components/screens/home/Home';

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false,
	},
	{
		path: '/about',
		component: About,
		isAuth: false,
	},
];
