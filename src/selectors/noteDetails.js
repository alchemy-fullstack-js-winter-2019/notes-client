export const getTitle = state => state.noteDetails.title;
export const getBody = state => state.noteDetails.body;
export const getNoteDetailsError = state => {
  if(state.noteDetails.error) return state.noteDetails.error.error || state.noteDetails.error.message;
  return null;
};
export const isNoteDetailsLoading = state => state.noteDetails.loading;
