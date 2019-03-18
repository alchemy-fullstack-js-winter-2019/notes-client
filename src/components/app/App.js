import React from 'react';
import { Header } from '../header/Header';
import CreateNote from '../../containers/notes/CreateNote';

export default function App() {
  return (
    <>
      <Header />
      <CreateNote />
    </>
  );
}
