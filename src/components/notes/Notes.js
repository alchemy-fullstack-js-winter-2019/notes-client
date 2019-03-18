import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notes.css';
import NoteSpinner from './NoteSpinner';

function Notes({ notes }) {
  const notesListItems = notes.map(note => {
    return (
      <li key={note._id}>
        <NoteSpinner loading={note.isPending}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </NoteSpinner>
      </li>
    );
  });
  return (
    <ul className={styles.Notes}>
      {notesListItems}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};

export default Notes;
