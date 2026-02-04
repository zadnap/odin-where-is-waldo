import { Link } from 'react-router';
import styles from './GameCard.module.scss';
import fallback from '@/assets/images/game-map-fallback.jpg';

const GameCard = ({ imageUrl, title, slug }) => {
  return (
    <article className={styles.gameCard}>
      <figure className={styles.image}>
        <img src={imageUrl || fallback} alt={`${title}'s game map`} />
      </figure>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <Link to={`/game/${slug}`} className={styles.link}>
          Play Now
        </Link>
      </div>
    </article>
  );
};

export default GameCard;
