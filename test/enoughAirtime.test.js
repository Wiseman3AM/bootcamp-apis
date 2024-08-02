import assert from 'assert';
import enoughAirtime from '../function/enoughAirtime.js';
import { describe, it } from 'node:test';


describe('The enoughAirtime function', function () {
    it('must calculate if a user will have enough airtime based on their projected usage', function () {
        assert.equal('R16.98', enoughAirtime('call,call,call,data,sms,sms,call,data', 50));
    });

    it('must calculate if a user will have enough airtime based on their projected usage', function () {
        assert.equal('R0.00', enoughAirtime('data,sms,data,sms', 20));
    });

    it('must calculate if a user will have enough airtime based on their projected usage', function () {
        assert.equal('R0.00', enoughAirtime('data,data,data', 36));
    });

});



