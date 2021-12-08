import EditPlayerForm from '../../components/EditPlayerForm/EditPlayerForm';

import styles from './EditPlayerPage.module.scss';

const EditPalyerPage = () => {
    return (
        <div className={styles.editPlayerPage}>
            <EditPlayerForm />
        </div>
    )
}

export default EditPalyerPage;