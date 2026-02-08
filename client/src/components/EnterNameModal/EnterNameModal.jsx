import { useState } from 'react';
import { Button } from '..';
import styles from './EnterNameModal.module.scss';

const EnterNameModal = ({ onSubmit, onClose }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.enterNameModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-over-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <h2 id="game-over-title">Game Over</h2>
          <p>Your time has been recorded!</p>
        </header>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="player-name">Your name</label>
          <input
            id="player-name"
            type="text"
            name="playerName"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={255}
            autoFocus
          />
          <footer className={styles.actions}>
            <Button onClick={onClose} variant="outline">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EnterNameModal;
