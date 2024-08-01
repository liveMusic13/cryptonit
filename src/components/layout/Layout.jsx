import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Layout;
