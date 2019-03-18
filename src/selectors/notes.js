export const getNotesError = state => state.notes.error;
export const isNotesLoading = state => state.notes.loading;

export const getNotes = state => {
  if(state.notes.pendingNote) {

    return [...state.notes.list, {
      _id: 'pending',
      title: '',
      body: '',
      isPending: true
    }];
  }

  return state.notes.list;
};
export const getNotesSummary = state => {
  return getNotes(state).map(note => ({
    ...note,
    body: note.body.length > 50 ? `${note.body.slice(0, 50)}...` : note.body
  }));
};
