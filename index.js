import express from 'express';
import cors from 'cors';
import totalPhoneBill from './function/totalPhoneBill.js';
import enoughAirtime from './function/enoughAirtime.js';
import longestWord from './function/wordGameLongest.js';
import shortestWord from './function/wordGameShortest.js';
import wordLengths from './function/wordGameSum.js';
import totalCallBill from './function/totalCallBill.js';
import totalDataBill from './function/totalDataBill.js';
import totalSmsBill from './function/totalSmsBill.js';



const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));



app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;


    const longestWordgame = longestWord(sentence);
    const shortestWordgame = shortestWord(sentence);
    const sumWordgame = wordLengths(sentence);

    return res.json({
        longestWord: longestWordgame,
        shortestWord: shortestWordgame,
        wordLengths: sumWordgame
    });
});



app.get('/api/phonebill/total', function (req, res) {

    const usage = req.query.usage;
    const sms = req.query.sms;
    const call = req.query.call;
    const data = req.query.data;
    const totalBill = totalPhoneBill(usage, sms, call, data);

    return res.json([
        {
            Bill: totalBill,
           
        },
        {
            status: 'success',
            message: 'Successful transaction',
        }]);
});







app.get('/api/phonebill/smsPrice', function (req, res) {

    const usage = req.query.usage;
    const price = req.query.price;
    const total = totalSmsBill(usage, price).totalBill;
    const instance = totalSmsBill(usage,price).smsCount;

    return res.json({
        type: 'sms',
        price: 'R ' + price,
        occured: instance,
        total: total
    });
});



app.post('/api/phonebill/smsPrice', function (req, res) {

    const usage = req.body.usage;
    const price = req.body.price;
    const total = totalSmsBill(usage, price).totalBill;
    const instance = totalSmsBill(usage, price).smsCount;

    return res.json({
        type: 'sms',
        price: 'R ' + price,
        occured: instance,
        total: total
    });
});





app.get('/api/phonebill/dataPrice', function (req, res) {

    const usage = req.query.usage;
    const price = req.query.price;
    const total = totalDataBill(usage, price).totalBill;
    const instance = totalDataBill(usage, price).dataCount;

    return res.json({
        type: 'data',
        price: 'R ' + price,
        occured: instance,
        total: total
    });
});

app.get('/api/phonebill/callPrice', function (req, res) {

    const usage = req.query.usage;
    const price = req.query.price;
    const total = totalCallBill(usage, price).totalBill;
    const instance = totalCallBill(usage, price).callCount;

    return res.json({
        type: 'call',
        price: 'R ' + price,
        occured: instance,
        total: total
    });
});



app.get('/api/enoughAirtime', function (req, res) {

    const usage = req.query.usage;
    const sms = req.query.sms;
    const call = req.query.call;
    const data = req.query.data;
    const remaining = req.query.remaining;


    const calculatedAirtime = enoughAirtime(usage, remaining, sms, call, data);

    return res.json({
        usage: usage,
        remaining: remaining,
        Balance: calculatedAirtime,
    });
});



const PORT = process.env.PORT || 1205;
app.listen(PORT, () => {
    console.log('Port is running on ', PORT)
})




