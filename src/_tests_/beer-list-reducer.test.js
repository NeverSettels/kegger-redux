import beerlistReducer from '../reducers/beer-list-reducer'

describe('beerlistReducer', () => {
  test('should return default state if there is no action passed into reducer', () => {
    expect(beerlistReducer([], { type: null })).toEqual([]);
  });
})