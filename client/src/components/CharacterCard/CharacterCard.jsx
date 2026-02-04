import styles from './CharacterCard.module.scss';

const CharacterCard = ({ imageUrl, name, isFound }) => {
  return (
    <article
      className={`${styles.characterCard} ${isFound ? styles.found : ''}`}
    >
      <img className={styles.image} src={imageUrl} alt={`${name}'s image`} />
      <h3 className={styles.name}>{name}</h3>
    </article>
  );
};

export default CharacterCard;
