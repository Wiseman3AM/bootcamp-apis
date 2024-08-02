import assert from 'assert';
import longestWord from '../function/wordGameLongest.js';
import { describe, it } from 'node:test';

describe('The longestWord function ', function () {
  it('must return the longest word in the sentence', function () {
    assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
  });

  it('must return the longest word in the sentence', function () {
    assert.equal('barked', longestWord('The yellow dog barked loud'), "longestWord failing...");
  });
});

