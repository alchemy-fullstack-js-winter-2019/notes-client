import React from 'react';
import PropTypes from 'prop-types';
import { FaAsterisk } from 'react-icons/fa';
import styles from './NoteSpinner.css';

function NoteSpinner({ loading, children }) {
  if(loading) {
    return (
      <span className={styles.spinner}>
        <FaAsterisk />
      </span>
    );
  }

  return children;
}

NoteSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default NoteSpinner;
