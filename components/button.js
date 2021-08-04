import styles from './button.module.scss';

const Button = ({ action, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {action}
    </button>
  );
};

export default Button;