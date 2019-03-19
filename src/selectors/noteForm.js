export const getTitle = state => state.noteForm.title;
export const getBody = state => state.noteForm.body;
export const getNoteFormError = state => {
  if(state.noteForm.error) return state.noteForm.error.error || state.noteForm.error.message;
  return null;
};
export const isNoteFormLoading = state => state.noteForm.loading;
