import React from "react";
import {Note} from "../../App";

export interface NotesContextProps {
  notes: Note[],
  noteIdForEdit: Note['id'] | null,
  deleteNote: (id: Note['id']) => void,
  selectNoteIdForEdit: (id: Note['id']) => void,
  changeNote: ({text, tag}: Omit<Note, 'id'>) => void,
  addNote: ({text, tag}: Omit<Note, 'id'>) => void
}

export const NotesContext = React.createContext<NotesContextProps>({
  notes: [],
  noteIdForEdit: null,
  deleteNote: () => {},
  selectNoteIdForEdit: () => {},
  changeNote: () => {},
  addNote: () => {}
})