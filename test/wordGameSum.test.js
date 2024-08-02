import assert from 'assert';
import wordLengths from '../function/wordGameSum.js';
import { describe, it } from 'node:test';

describe('The wordLength function ', function () {
  it('must return the sum of all words in the sentence', function () {
    assert.equal(32, wordLengths('The dog jumped over the shipyard fence'), "wordLengths is failing...");
  });

  it('must return the sum of all words in the sentence', function () {
    assert.equal(18, wordLengths('The dog barked loudly'), "wordLengths failing...");
  });
});

