import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>To-Do Application</h1>
            <code>Built on React</code>
        </header>
    );
};

export default Header;