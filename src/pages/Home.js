import React from 'react';
import AllNotes from '../containers/notes/AllNotes';
import CreateNote from '../containers/notes/CreateNote';

export default function Home() {
  return (
    <>
      <AllNotes />
      <CreateNote />
    </>
  );
}
