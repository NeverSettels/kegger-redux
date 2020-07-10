import toggleFromeReducer from "../reducers/form-reducer";
describe('toggleFromeReducer', () => {
  test('should return default state if there is no action passed into the reducer', () => {
    expect(toggleFromeReducer(false, { type: null })).toEqual(false);
  })

  test('should return the opposite state if passed the toggle action', () => {
    expect(toggleFromeReducer(false, { type: "TOGGLE_CREATE" })).toEqual(true)
  })

})