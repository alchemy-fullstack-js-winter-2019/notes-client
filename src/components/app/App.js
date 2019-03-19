import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/Home';
import NoteDetailsPage from '../../pages/NoteDetailsPage';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <main className={styles.App}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/notes/:id" component={NoteDetailsPage} />
          </Switch>
        </main>
      </>
    </Router>
  );
}
