import { FaPlus, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import styles from "./Header.module.scss";

const Header = () => {
    const history = useHistory();
    const user = useSelector(state => state.account.user);

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo} onClick={() => history.push('/')}>
                <img src="https://pbs.twimg.com/media/FFdW6k6XsAQlDRQ.jpg"/>
                    Dexgame
                </div>
                <div className={styles.rightContent}>
                    {user ? (
                        <>
                            <div className={styles.addPlayer} onClick={() => history.push('/edit')}>
                                <FaPlus /> <div className={styles.addPlayerButton}> Add Players </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.account} onClick={() => history.push('/auth')}>
                                <FaUser /> Login
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
