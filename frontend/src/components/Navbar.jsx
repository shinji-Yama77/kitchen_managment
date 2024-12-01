import styles from '../styles/Navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function Nav() {
    return (
        <nav >
            <ul className={styles.container}>
                <li><a href='#'>Current Inventory</a></li>
                <li><a href='#'>Your Recipes</a></li>
                <li><a href='#'>Create a Recipe</a></li>
                <li><a href='#'>Add a New Ingredient</a></li>
            </ul>
            <SearchBar />
        </nav>

        
        
    )
}

export function SearchBar() {
    return (
        <TextField size='small'
                variant='outlined'
                id="input-with-search-icon"
                sx={{
                    "& .MuiInputBase-root": {
                        margin: 0
                    },
                    marginTop: '2em',
                    width: '100%',
                    maxWidth: '500px'

                }}
                slotProps={{
                    input : {
                        placeholder: "Search for items, recipes...",
                        startAdornment: (
                            <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    },
                }}
            />
    )
}

