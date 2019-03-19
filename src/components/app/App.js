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
import EditNotePage from '../../pages/EditNotePage';
import Callback from '../../containers/auth/Callback';
import { withSession } from '../../containers/auth/withSession';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <main className={styles.App}>
          <Switch>
            <Route exact path="/callback" component={Callback} />
            <Route exact path="/" component={withSession(Home)} />
            <Route exact path="/notes/:id" component={withSession(NoteDetailsPage)} />
            <Route exact path="/notes/:id/edit" component={withSession(EditNotePage)} />
          </Switch>
        </main>
      </>
    </Router>
  );
}
