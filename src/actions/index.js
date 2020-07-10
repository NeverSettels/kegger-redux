export const toggleDetails = () => ({ type: 'TOGGLE_DETAILS' })
export const toggleCreate = () => ({ type: 'TOGGLE_CREATE' })
export const addKeg = keg => ({ type: 'ADD_KEG', keg })
export const serve = id => ({ type: 'SERVE', id })
export const editKeg = (keg, id) => ({ type: 'EDIT_KEG', keg, id })
export const deleteKeg = id => ({ type: 'DELETE_KEG', id })