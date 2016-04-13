import * as mocha from 'mocha';
import {assert} from 'chai';
import {add} from './utils';

describe('tests', () => {
  it('add(1,2) returns 3', () => {
    assert.equal(add(1,2), 3);
  });
  
  it('1 + 1 = 2', () => {
    assert.equal(1+1, 2);
  });
});