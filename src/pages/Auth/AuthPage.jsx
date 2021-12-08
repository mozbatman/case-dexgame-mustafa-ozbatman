
import styles from './AuthPage.module.scss';
import Login from '../../components/Login/Login';

const AuthPage = () => {
    return (
        <div className={styles.authPage}>
            <Login />
        </div>
    )
}

export default AuthPage;