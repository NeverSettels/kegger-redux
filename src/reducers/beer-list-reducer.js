export default (state = [], action) => {
  const { keg, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      const tempState = [...state]
      tempState.push(keg)
      return tempState
    case "EDIT_KEG":
      const editState = [...state]
      const editIndex = editState.findIndex(keg => keg.id === id)
      editState[editIndex] = keg;
      return editState

    case "SERVE":
      const serveState = [...state]
      const serveIndex = serveState.findIndex(keg => keg.id === id)
      serveState[serveIndex].pints--;
      return serveState
    case 'DELETE_KEG':
      const newState = [...state];
      const deleteIndex = newState.findIndex(keg => keg.id === id)
      newState.splice(deleteIndex, 1)
      console.log(newState)
      if (newState.length > 0) {
        return newState;
      } else {
        return []
      }

    default:
      return state;
  }
};