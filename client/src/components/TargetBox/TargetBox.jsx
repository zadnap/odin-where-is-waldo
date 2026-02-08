import { Button } from '..';
import styles from './TargetBox.module.scss';

const TargetBox = ({
  handleSelect,
  positionPercent,
  position,
  characters = [],
}) => {
  return (
    <div
      className={styles.targetBox}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div className={styles.selectArea} />
      <div className={styles.dropdown}>
        {characters.map((c) => (
          <Button
            key={c.id}
            className={styles.option}
            onClick={() =>
              handleSelect({
                x: positionPercent.x,
                y: positionPercent.y,
                characterId: c.id,
              })
            }
          >
            <img src={c.imageUrl} alt={c.name} />
            <span>{c.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TargetBox;
