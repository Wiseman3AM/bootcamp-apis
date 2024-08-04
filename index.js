import express from 'express';
import cors from 'cors';
import totalPhoneBill from './function/totalPhoneBill.js';
import enoughAirtime from './function/enoughAirtime.js';
import longestWord from './function/wordGameLongest.js';
import shortestWord from './function/wordGameShortest.js';
import wordLengths from './function/wordGameSum.js';


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));



app.get('/api/word_game', function(req, res) {
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



app.get('/api/phonebill/total', function(req, res) {
    
    const usage = req.query.usage;
    const totalBill = totalPhoneBill(usage);

    return res.json({ 
        Bill:  totalBill,           
    });
});


app.get('/api/phonebill/smsPrice', function(req, res) {
    
    const usage = req.query.usage;
    const totalBill = totalPhoneBill(usage);

    return res.json({ 
        type:  'sms',
        price: 0.65,
        
        total: ''         
    });
});



app.get('/api/enoughAirtime', function(req, res) {
    
    const usage = req.query.usage;
    const calculatedAirtime = enoughAirtime(usage);

    return res.json({ 
        balance:  totalBill,           
    });
});



const PORT = process.env.PORT || 1205;
app.listen(PORT, () => {
    console.log('Port is running on ', PORT)
})