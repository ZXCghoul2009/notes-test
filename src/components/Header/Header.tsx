import React from 'react';

import styles from './Header.module.scss';
import {useNotes} from '../../utils/context/useNotes';


export const Header: React.FC = () => {
  const {notes} = useNotes();

  return (
      <div className={styles.header_container}>
        <h1 className={styles.header_title}>
          Notes list <b>{notes.length}</b>
        </h1>
      </div>
  );
};
