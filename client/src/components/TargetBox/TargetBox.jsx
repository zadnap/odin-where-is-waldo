import { Button } from '..';
import styles from './TargetBox.module.scss';

const TargetBox = ({ handleSelect, position, characters = [] }) => {
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
            onClick={() => handleSelect(c)}
          >
            <img src={c.img} alt={c.name} />
            <span>{c.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TargetBox;
