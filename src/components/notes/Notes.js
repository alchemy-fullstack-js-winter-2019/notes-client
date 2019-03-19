import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Notes.css';
import NoteSpinner from './NoteSpinner';

function Notes({ notes }) {
  const notesListItems = notes.map(note => {
    return (
      <li key={note._id}>
        <NoteSpinner loading={note.isPending}>
          <Link to={`/notes/${note._id}`}>
            <h2>{note.title}</h2>
            <h5>by {note.author}</h5>
            <p>{note.body}</p>
          </Link>
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
