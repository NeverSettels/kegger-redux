import detailsReducer from "../reducers/details-reducer";
describe('detailsReducer', () => {
  test('should return default state if there is no action passed into the reducer', () => {
    expect(detailsReducer(false, { type: null })).toEqual(false);
  })

  test('should return the opposite state if passed the toggle action', () => {
    expect(detailsReducer(false, { type: "TOGGLE_DETAILS" })).toEqual(true)
  })

})