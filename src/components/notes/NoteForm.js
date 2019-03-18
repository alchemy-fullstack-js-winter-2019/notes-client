import React from 'react';
import PropTypes from 'prop-types';
import { FaAsterisk } from 'react-icons/fa';
import styles from './NoteForm.css';

function NotesForm({ title, body, error, loading, createNote, titleChange, bodyChange }) {
  return (
    <form className={styles.NotesForm} onSubmit={createNote.bind(null, title, body)}>
      {error && <section className={styles.error}>
        <p>Error: {error}</p>
      </section>}
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
      <button disabled={loading}>
        <span className={loading ? styles.spinner : ''}>{loading ? <FaAsterisk /> : 'Create'}</span>
      </button>
    </form>
  );
}

NotesForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createNote: PropTypes.func.isRequired,
  titleChange: PropTypes.func.isRequired,
  bodyChange: PropTypes.func.isRequired
};

export default NotesForm;
