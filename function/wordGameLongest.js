
function longestWord(sentence) {

  const words = sentence.split(' ');

 
  const alphanumericWords = words.filter(word => /^[a-zA-Z0-9]+$/.test(word));


  let longest = '';

 
  for (const word of alphanumericWords) {
      if (word.length >= longest.length) {
          longest = word;
      }
  }

  return longest;
}
  
  export default longestWord;
  