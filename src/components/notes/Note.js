import React from 'react';
import PropTypes from 'prop-types';

function Note({ title, body }) {
  return (
    <>
      <h2>{title}</h2>
      <textarea disabled value={body}></textarea>
    </>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Note;
