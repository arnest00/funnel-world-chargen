import styles from './button.module.css';

const Button = ({ action, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {action}
    </button>
  );
};

export default Button;