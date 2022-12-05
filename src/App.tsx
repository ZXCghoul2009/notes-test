import React from 'react';

import {Header} from './components/Header/Header';
import {AddNote} from './components/AddNote/AddNote';
import {NotesList} from './components/NotesList/NotesList';
import {NotesProvider} from './utils/context/NotesProvider';

import styles from './App.module.scss'

export type Note = {
  id: number;
  text: string;
  tag: string;
};

const App = () => {

  return (
      <NotesProvider>
        <div className={styles.app_container}>
          <div className={styles.container}>
            <Header/>
            <AddNote mode="add"/>
            <NotesList/>
          </div>
        </div>
      </NotesProvider>
  )
}

export default App
