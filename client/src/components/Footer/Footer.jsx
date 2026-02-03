import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>&copy; 2026 zadnap. The Odin Project.</p>
      <a
        href="https://github.com/zadnap"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        aria-label="Visit me on Github"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
