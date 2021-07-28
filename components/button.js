import styles from './button.module.css';

const Button = ({ action }) => {
  return (
    <button className={styles.button}>
      {action}
    </button>
  );
};

export default Button;