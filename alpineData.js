document.addEventListener('alpine:init', () => {
  Alpine.data('bootcampFunctions', () => {
    return {
      
      wordGameShow: true,
      sentence: '',
      wordGameObject: {},


      async fetchWordGameAPI() {

        try {
          const response = await axios.get(`http://localhost:1205/api/word_game?`, {
            params: { sentence: this.sentence }
          });
          this.wordGameObject = response.data
          console.log('WordsGameObject', this.wordGameObject);
        } catch(error) {
          console.error('Error: ', error);
        }
        },



      wordGame() {
        const verifiedSentence = this.sentence.split(' ')

        if (verifiedSentence.length >= 5) {
          localStorage['sentence'] = this.sentence;
          this.fetchWordGameAPI() ;
        } else {
          alert("Sentence is too short")
        }
      },






      async init() {



      },


    }
  })
})