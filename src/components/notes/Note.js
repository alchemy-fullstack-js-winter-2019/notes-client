import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';
import styles from './Note.css';

function Note({ id, title, body }) {
  return (
    <article className={styles.Note}>
      <h2>{title}</h2>
      <pre>{body}</pre>
      <Link to={`/notes/${id}/edit`}>
        <FaPen />
      </Link>
    </article>
  );
}

Note.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
