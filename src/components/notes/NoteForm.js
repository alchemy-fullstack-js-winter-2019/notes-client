import React from 'react';
import PropTypes from 'prop-types';
import styles from './NoteForm.css';
import NoteSpinner from './NoteSpinner';

function NotesForm({ submitText, title, body, error, loading, handleSubmit, titleChange, bodyChange }) {
  return (
    <form className={styles.NotesForm} onSubmit={handleSubmit.bind(null, title, body)}>
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
        <NoteSpinner loading={loading}>
          <span>{submitText}</span>
        </NoteSpinner>
      </button>
    </form>
  );
}

NotesForm.propTypes = {
  submitText: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  titleChange: PropTypes.func.isRequired,
  bodyChange: PropTypes.func.isRequired
};

NotesForm.defaultProps = {
  submitText: 'Create'
};

export default NotesForm;
