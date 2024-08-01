import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/fonts.css';
import './assets/styles/global.css';
import Router from './routes/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
