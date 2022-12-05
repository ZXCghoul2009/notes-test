import React, {useState} from 'react';

import {NoteItem} from './NoteItem/NoteItem';
import {AddNote} from '../AddNote/AddNote';
import {useNotes} from '../../utils/context/useNotes';

import styles from './NoteList.module.scss'


export const NotesList: React.FC = () => {
  const {notes, noteIdForEdit, deleteNote, selectNoteIdForEdit} = useNotes()
  const [filterValue, setFilterValue] = useState("");

  const filteredNotes = notes.filter(note => {
    if (filterValue.length) {
      return note.tag.toLowerCase().includes(filterValue.toLowerCase())
    } else return null;
  });

  return (
      <div>
        <div className={styles.fields_container}>
          <input
              placeholder="search by tag"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              type="text"
          />
        </div>
        {!notes.length && <p style={{textAlign: "center"}}>Add notes</p>}
        {filterValue && !filteredNotes.length && notes.length ?
            <p style={{textAlign: "center"}}>Notes with the <strong>{filterValue}</strong> tag were not found
            </p> : filterValue ? filteredNotes.map((filteredNote) => {
              if (filteredNote.id === noteIdForEdit)
                return <AddNote
                    key={filteredNote.id}
                    mode="edit"
                    editNote={{text: filteredNote.text, tag: filteredNote.tag}}
                />
              return (
                  <NoteItem
                      key={filteredNote.id}
                      note={filteredNote}
                      deleteNote={deleteNote}
                      selectNoteIdForEdit={selectNoteIdForEdit}
                  />
              )
            }) : notes.map((note) => {
              if (note.id === noteIdForEdit)
                return <AddNote
                    key={note.id}
                    mode="edit"
                    editNote={{text: note.text, tag: note.tag}}
                />
              return (
                  <NoteItem
                      key={note.id}
                      note={note}
                      deleteNote={deleteNote}
                      selectNoteIdForEdit={selectNoteIdForEdit}
                  />
              )
            })}
      </div>
  )
};


