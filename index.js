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
    const totalBill = totalPhoneBill(usage);

    return res.json([
        {
            Bill: totalBill,
           
        },
        {
            status: 'success',
            message: `The transaction is a sucess ${totalBill}`,
        }]);
});


app.get('/api/phonebill/smsPrice', function (req, res) {

    const usage = req.query.usage;
    const total = totalSmsBill(usage).totalBill;
    const instance = totalSmsBill(usage).smsCount;

    return res.json({
        type: 'sms',
        price: 'R 0.65',
        occured: instance,
        total: total
    });
});

app.get('/api/phonebill/dataPrice', function (req, res) {

    const usage = req.query.usage;
    const total = totalDataBill(usage).totalBill;
    const instance = totalDataBill(usage).dataCount;

    return res.json({
        type: 'data',
        price: 'R 5.00',
        occured: instance,
        total: total
    });
});

app.get('/api/phonebill/callPrice', function (req, res) {

    const usage = req.query.usage;
    const total = totalCallBill(usage).totalBill;
    const instance = totalCallBill(usage).callCount;

    return res.json({
        type: 'call',
        price: 'R 2.75',
        occured: instance,
        total: total
    });
});



app.get('/api/enoughAirtime', function (req, res) {

    const usage = req.query.usage;
    const remaining = req.query.remaining;


    const calculatedAirtime = enoughAirtime(usage, remaining);

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