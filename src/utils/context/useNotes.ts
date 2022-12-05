import React from "react";
import {NotesContext} from "./NotesContext";

export const useNotes = () => React.useContext(NotesContext)