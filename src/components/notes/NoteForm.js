import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteForm.css';

function NotesForm({ title, body, createNote, titleChange, bodyChange }) {
  return (
    <form className={styles.NotesForm} onSubmit={createNote.bind(null, title, body)}>
      <input
        type="text"
        name="title"
        placeholder="Note Title"
        value={title}
        onChange={titleChange}
      />
      <textarea
        name="body" value={body}
        onChange={bodyChange}
      ></textarea>
      <button>Create</button>
    </form>
  );
}

NotesForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createNote: PropTypes.func.isRequired,
  titleChange: PropTypes.func.isRequired,
  bodyChange: PropTypes.func.isRequired
};

export default NotesForm;
