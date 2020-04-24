import React from "react";
import Note from "./Note.js";

let NotesList = props => {
  const renderNote = note => (
    <Note
      key={note.id}
      note={note}
      onType={props.onType}
      onDelete={props.onDelete}
    />
  );
  let searchList = props.notes.filter(note => note.doesMatchSearch);
  let notesList = searchList.map(renderNote);
  return <ul className="notes-list">{notesList}</ul>;
};

export default NotesList;
