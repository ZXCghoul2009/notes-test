import React, {useState} from "react";
import data from '../data/notes.json'
import {Note} from "../../App";
import {NotesContext} from "./NotesContext";

interface NotesProviderProps {
  children: React.ReactNode
}

const DEFAULT_NOTES = data;

export const NotesProvider: React.FC<NotesProviderProps> = ({children}) => {
  const [notes, setNotes] = useState(DEFAULT_NOTES)
  const [noteIdForEdit, setNoteIdForEdit] = useState<Note["id"] | null>(null)

  const selectNoteIdForEdit = (id: Note["id"]) => {
    setNoteIdForEdit(id)
  }

  const addNote = ({text, tag}: Omit<Note, 'id'>) => {
    setNotes([...notes, {id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 0, text, tag: tag}])
  }

  const deleteNote = (id: Note['id']) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const changeNote = ({text, tag}: Omit<Note, 'id'>) => {
    setNotes(
        notes.map((note) => {
          if (note.id === noteIdForEdit) {
            return {...note, text, tag}
          }
          return note;
        })
    )
    setNoteIdForEdit(null)
  }

  const value = React.useMemo(() => ({
    notes,
    noteIdForEdit,
    deleteNote,
    selectNoteIdForEdit,
    changeNote,
    addNote,

  }), [
    notes,
    noteIdForEdit,
    deleteNote,
    selectNoteIdForEdit,
    changeNote,
    addNote
  ])

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
}