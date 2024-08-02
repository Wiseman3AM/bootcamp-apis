  // Function to find the shortest word in a given sentence
  function shortestWord(sentence) {

    const words = sentence.split(' ');
    const alphanumericWords = words.filter(word => /^[a-zA-Z0-9]+$/.test(word));

  
    let shortest = alphanumericWords[0] || '';

    for (const word of alphanumericWords) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }

    return shortest;
}
  
  export default shortestWord;