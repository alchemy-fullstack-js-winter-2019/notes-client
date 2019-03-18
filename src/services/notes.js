import { post, get } from './request';

export const postNote = note => post('/notes', note);

export const getNotes = () => get('/notes');

export const getNote = id => get(`/notes/${id}`);
