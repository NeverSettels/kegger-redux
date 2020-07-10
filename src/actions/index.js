import * as types from './actionTypes'

export const toggleDetails = () => ({ type: types.TOGGLE_DETAILS })
export const toggleCreate = () => ({ type: types.TOGGLE_CREATE })
export const addKeg = keg => ({ type: types.ADD_KEG, keg })
export const serve = id => ({ type: types.SERVE, id })
export const editKeg = (keg, id) => ({ type: types.EDIT_KEG, keg, id })
export const deleteKeg = id => ({ type: types.DELETE_KEG, id })