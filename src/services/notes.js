import { post, get, put } from './request';

export const postNote = note => post('/notes', note);

export const getNotes = () => get('/notes');

export const getNote = id => get(`/notes/${id}`);

export const putNote = (id, note) => put(`/notes/${id}`, note);
