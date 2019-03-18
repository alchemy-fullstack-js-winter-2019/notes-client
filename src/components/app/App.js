import React from 'react';
import { Header } from '../header/Header';
import CreateNote from '../../containers/notes/CreateNote';
import AllNotes from '../../containers/notes/AllNotes';

export default function App() {
  return (
    <>
      <Header />
      <AllNotes />
      <CreateNote />
    </>
  );
}
