import styles from '../styles/Navbar.module.css';



export default function Nav() {
    return (
        <nav >
            <ul className={styles.container}>
                <li><a href='#'>Current Inventory</a></li>
                <li><a href='#'>Your Recipes</a></li>
                <li><a href='#'>Create a Recipe</a></li>
                <li><a href='#'>Add a New Ingredient</a></li>
            </ul>
        </nav>
    )
}

