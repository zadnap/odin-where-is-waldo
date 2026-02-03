import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  variant = 'primary',
  className,
  disabled = false,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
