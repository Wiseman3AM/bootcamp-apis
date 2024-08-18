document.addEventListener('alpine:init', () => {
  Alpine.data('bootcampFunctions', () => {
    return {

      wordGameShow: false,
      billShow: false,
      airtimeShow: false,
      details: false,
      sentence: '',
      usage: '',
      usageB: '',
      wordGameObject: {},
      totalBill: [],
      userSms: '',
      userCall: '',
      userData: '',
      enterUsage: false,
      smsBill: {},
      callBill: {},
      dataBill: {},
      airtime: '',
      balance: '',





      async fetchWordGameAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/word_game?`, {
            params: { sentence: this.sentence }
          });
          this.wordGameObject = response.data
          console.log('WordsGameObject', this.wordGameObject);
        } catch (error) {
          console.error('Error: ', error);
        }
      },

      wordGame() {
        const verifiedSentence = this.sentence.split(' ')

        if (verifiedSentence.length >= 5) {
          localStorage['sentence'] = this.sentence;
          this.fetchWordGameAPI();
        } else {
          alert("Sentence is too short")
        }
      },



      async fetchTotalPhoneBillAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/phonebill/total?`, {
            params: {
              usage: this.usage,
              sms: this.userSms,
              call: this.userCall,
              data: this.userData
            }
          });
          this.totalBill = [];
          await this.totalBill.push(response.data);
          console.log('Total bill', this.totalBill);
        } catch (error) {
          console.error('Error: ', error);
        }
      },


      totalPhoneBill() {
        const verifiedUsage = this.usage.split(',')
        const validValues = ['call', 'sms', 'data'];
        const allValid = verifiedUsage.every(word => validValues.includes(word.trim()));

        if (allValid) {
          localStorage['usage'] = this.usage;
          this.fetchTotalPhoneBillAPI();
        } else {
          alert('Please enter correct values!');
          this.usage = '';
          localStorage['usage'] = this.usage;
        }
      },


      enterPrices() {
        if (this.userCall === '' || this.userSms === '' || this.userData === '') {
          alert('Please enter valid values for call, SMS, and data.');
          this.userCall = '';
          this.userSms = '';
          this.userData = '';
          this.enterUsage = false;
        } else {
          this.enterUsage = true;
        }
      },



      async fetchTotalCallBillAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/phonebill/callPrice?`, {
            params: {
              usage: this.usage,
              price: this.userCall
            }
          });
          this.callBill = response.data
          console.log('Call bill', this.callBill);
        } catch (error) {
          console.error('Error: ', error);
        }
      },

      async fetchTotalDataBillAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/phonebill/dataPrice?`, {
            params: {
              usage: this.usage,
              price: this.userData
            }
          });
          this.dataBill = response.data
          console.log('Data bill', this.dataBill);
        } catch (error) {
          console.error('Error: ', error);
        }
      },

      async fetchTotalSmsBillAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/phonebill/smsPrice?`, {
            params: {
              usage: this.usage,
              price: this.userSms
            }
          });
          this.smsBill = response.data
          console.log('Sms bill', this.smsBill);
        } catch (error) {
          console.error('Error: ', error);
        }
      },

      billDetail() {
        if (!this.usage || this.usage.trim() === '') {
          alert("Please enter usage");
        } else {
          this.fetchTotalCallBillAPI();
          this.fetchTotalSmsBillAPI();
          this.fetchTotalDataBillAPI();
        }
      },

      async fetchEnoughAirtimeAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/enoughAirtime?`, {
            params: {
              usage: this.usageB,
              remaining: this.airtime
            }
          });
          this.balance = response.data
          console.log('Remaining balance', this.balance);
        } catch (error) {
          console.error('Error: ', error);
        }
      },


      enoughAirtimeCalculator() {
        if (!this.usageB || this.usageB.trim() === '') {
          localStorage['usageB'] = this.usageB;
          alert("Please enter usage");
        } else {
          this.fetchEnoughAirtimeAPI();
          localStorage['usageB'] = this.usageB;
        }
      },












      /*    async init() {
   
   
   
         },
    */

    }
  })
})