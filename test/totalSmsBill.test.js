import assert from 'assert';
import totalSmsBill from '../function/totalSmsBill.js';
import { describe, it } from 'node:test';




describe('The totalSmsBill function' , function(){
    it('calculates the total sms bill for the projected usage' , function(){
        assert.equal('R3.25', totalSmsBill('sms, sms, sms, sms, sms').totalBill)});
        it('calculates the total sms bill for the projected usage' , function(){
        assert.equal('R1.95', totalSmsBill('sms, sms, sms').totalBill)});
        it('calculates the total sms bill for the projected usage'  , function(){
        assert.equal('R1.30', totalSmsBill('sms, sms').totalBill)});
    });