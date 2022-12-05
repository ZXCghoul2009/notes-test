import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  color: 'orange' | 'blue' | 'red';
}

export const Button: React.FC<ButtonProps> = ({
                                                color,
                                                children,
                                                onClick
                                              }) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
  );
};