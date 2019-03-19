import React from 'react';
import AllNotes from '../containers/notes/AllNotes';
import CreateNote from '../containers/notes/CreateNote';
import styles from './Home.css';

export default function Home() {
  return (
    <section className={styles.Home}>
      <CreateNote />
      <AllNotes />
    </section>
  );
}
