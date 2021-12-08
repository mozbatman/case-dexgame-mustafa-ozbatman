import styles from './GameCard.module.scss';

const GameCard = ({ game }) => {

    return (
        <div className={styles.gameCard}>
            <div className={styles.gameCardImage}>
                <img src={game.gameImg ? game.gameImg : `https://picsum.photos/id/${game.id}/200/300`} alt={game.gameName} />
            </div>
            <div className={styles.gameCardBody}>
                <span>{game.gameName}</span>
            </div>
            <div className={styles.gameCardFooter}>
                <span>{game.gamerCount} Gamer Count</span>
            </div>
        </div>
    )
}

export default GameCard;