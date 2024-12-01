import styles from '../styles/Header.module.css';




export default function Header() {
    return (
        <header className={styles.container}>
            <h1>Your Kitch AI</h1>
            <h2>What are we cooking today, Shinji?</h2>
        </header>
    )
}