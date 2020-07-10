import beerlistReducer from '../reducers/beer-list-reducer'



describe('beerlistReducer', () => {
  const keg = { name: "Sample beer", brand: "Sample brand", img: "beer.url", price: 5, alc: 3, pints: 124, id: 1 }
  const keg2 = { name: "Sample beer22", brand: "Sample brand22", img: "beer22.url", price: 5, alc: 3, pints: 124, id: 1 }
  test('should return default state if there is no action passed into reducer', () => {
    expect(beerlistReducer([], { type: null })).toEqual([]);
  });
  test('should return list withkeg added to it', () => {
    expect(beerlistReducer([], { type: "ADD_KEG", keg })).toEqual([keg]);
  });

  test('should return edited keg ', () => {
    expect(beerlistReducer([keg], { type: "EDIT_KEG", keg: keg2, id: 1 })).toEqual([{ ...keg2, id: 1 }]);
  });

  test('should return keg with pints-1 ', () => {
    expect(beerlistReducer([keg], { type: "SERVE", id: 1 })).toEqual([{ ...keg, pints: 123 }]);
  });

  test('should return epty list from keg being deleted', () => {
    expect(beerlistReducer([keg], { type: "DELETE_KEG", keg })).toEqual([]);
  });
})