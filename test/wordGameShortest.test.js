import assert from 'assert';
import shortestWord from '../function/wordGameShortest.js';
import { describe, it } from 'node:test';

describe('The shortestWord function ', function () {
  it('must return the shortest word in the sentence', function () {
    assert.equal('the', shortestWord('The dog jumped over the shipyard fence'), "shortestWord failing...");
  });

  it('must return the shortest word in the sentence', function () {
    assert.equal('up', shortestWord('The dog barked loudly at the cat up the tree'), "shortestWord failing...");
  });
});
