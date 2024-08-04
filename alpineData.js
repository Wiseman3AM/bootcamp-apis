document.addEventListener('alpine:init', () => {
  Alpine.data('bootcampFunctions', () => {
    return {

      wordGameShow: true,
      sentence: '',
      usage: '',
      wordGameObject: {},
      totalBill: "",




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
            params: { usage: this.usage }
          });
          this.totalBill = response.data
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
        }
      },












      async init() {



      },


    }
  })
})