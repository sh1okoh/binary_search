import test from 'ava';
import SearchAlgo from '../index.js';

const searchAlgo = new SearchAlgo;
test('searchAlgo#binarySearch should return "true" if target is found!', t => {
  let arr = [1, 3, 5, 7, 8, 9];
  let target = 5;
  t.is(searchAlgo.binarySearch(arr, target), true);
});

test('searchAlgo#binarySearch should return "false" if target is not found!', t => {
  let arr = [1, 3, 5, 7, 8, 9];
  let target = 2;
  t.is(searchAlgo.binarySearch(arr, target), false);
});
