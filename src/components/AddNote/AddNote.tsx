import React, {useState} from 'react';

import {Button} from '../Button/Button';
import {Note} from '../../App';
import {useNotes} from '../../utils/context/useNotes';

import styles from './AddNote.module.scss';

interface AddNoteProps {
  mode: 'add'
}

interface EditNoteProps {
  mode: 'edit',
  editNote: Omit<Note, 'id'>
}

type AddNotesProps = AddNoteProps | EditNoteProps

const DEFAULT_NOTE = {
  text: '',
  tag: ''
}

export const AddNote: React.FC<AddNotesProps> = (props) => {
  const {changeNote, addNote} = useNotes();

  const isEdit = props.mode === 'edit';
  const [note, setNote] = useState(isEdit ? props.editNote : DEFAULT_NOTE);

  const onChangeTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setNote({...note, tag: value})
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setNote({...note, text: value})
    if (value.includes("#")) {
      value.split(' ').map(i => {
        if (i.includes("#")) {
          setNote({...note, tag: i.slice(1), text: value});
        }
      })
    }
  }
  const onClick = () => {
    const noteItem = {text: note.text, tag: note.tag}
    if (isEdit) {
      return changeNote(noteItem)
    }
    addNote(noteItem)
    setNote(DEFAULT_NOTE)
  }

  return (
      <div className={styles.note_container}>
        <div className={styles.fields_container}>
          {!isEdit &&
          <input placeholder="..." type="text" id="text" value={note.text} name="text" onChange={onChange}/>}
          {isEdit &&
          <>
            <input placeholder="..." type="text" id="text" value={note.text} name="text" onChange={onChange}/>
            <input placeholder="add tag" type="text" id="text" value={note.tag} name="text" onChange={onChangeTag}/>
          </>
          }
        </div>
        <div className={styles.button_container}>
          {!isEdit && <Button onClick={onClick} color="blue">Add</Button>}
          {isEdit && <Button onClick={onClick} color="blue">Confirm</Button>}
        </div>
      </div>
  );
};

