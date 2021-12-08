
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { getGames } from '../../actions/gameAction';
import DataTable from '../../components/DataTable/DataTable';
import GameCard from '../../components/GameCard/GameCard';
import { gamersColumns } from './mainPage.const';
import styles from './MainPage.module.scss';

const MainPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const games = useSelector((state) => state.games.games);
    const players = useSelector((state) => state.account.players);
    
    useEffect(() => {
        dispatch(getGames());
    }, []);

    const onClickRow = (data) => {
        history.push(`/edit/${data.id}`);
    }

    return (
        <main className={styles.mainPage}>
            <div className={styles.gamesContainer}>
                {
                    games.map(game => {
                        return <GameCard game={game} />
                    })
                }
            </div>
            <div className={styles.gamersContainer}>
                {players && <DataTable columns={gamersColumns} datas={players.players} onClickRow={onClickRow} />}
            </div>
        </main>
    )
}

export default MainPage;