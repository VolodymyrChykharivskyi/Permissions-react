import React from 'react';
import styles from './Button.module.css';

const Button = ({action}) => {
  return (
    <button onClick={action} className={styles.Button}>Save</button>
  );
}

export default Button;
