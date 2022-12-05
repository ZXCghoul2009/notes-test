import React from 'react';
import {Note} from '../../../App';
import styles from './NoteItem.module.scss';
import {Button} from '../../Button/Button';

interface NoteItemProps {
  note: Note,
  deleteNote: (id: Note['id']) => void,
  selectNoteIdForEdit: (id: Note['id']) => void,
}

export const NoteItem: React.FC<NoteItemProps> = ({
                                                    note,
                                                    deleteNote,
                                                    selectNoteIdForEdit
                                                  }) => {
  return (
      <div className={styles.note_item_container}>
        <div>
          <div aria-hidden className={styles.note_item_title}>
            {note.text.replace(/\#/g, '')}
          </div>
          <div aria-hidden className={styles.note_item_description}>
            {note.tag.length === 0 ? '' : `#${note.tag}`}
          </div>
        </div>
        <div className={styles.note_item_button_container}>
          <Button onClick={() => selectNoteIdForEdit(note.id)} color='orange'>
            EDIT
          </Button>
          <Button color='red' onClick={() => deleteNote(note.id)}>
            DELETE
          </Button>
        </div>
      </div>
  );
};

