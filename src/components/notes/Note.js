import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import styles from './Note.css';

function Note({ note }) {
  const { _id, title, body } = note;
  return (
    <article className={styles.Note}>
      <h2>{title}</h2>
      <pre>{body}</pre>
      <Link to={`/notes/${_id}/edit`}>
        <FaPen />
      </Link>
    </article>
  );
}

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
