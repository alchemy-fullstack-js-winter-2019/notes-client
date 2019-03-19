import React from 'react';
import PropTypes from 'prop-types';
import styles from './Note.css';

function Note({ title, body }) {
  return (
    <article className={styles.Note}>
      <h2>{title}</h2>
      <pre>{body}</pre>
    </article>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
