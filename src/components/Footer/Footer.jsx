import styles from './Footer.module.css';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>© {year}. To-Do Application.</p>
        </footer>
    );
};

export default Footer;