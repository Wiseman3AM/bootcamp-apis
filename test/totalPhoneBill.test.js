import assert from 'assert';
import totalPhoneBill from '../function/totalPhoneBill.js';
import { describe, it } from 'node:test';




describe('toatlPhoneBill' , function(){
    it('Calculates the total bill for the data provided.' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'))});
        it('Calculates the total bill for the data provided.' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'))});
        it('Calculates the total bill for the data provided.' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'))});
    });