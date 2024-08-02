
  function wordLengths(sentence) {
 
    const words = sentence.split(' ');
    const alphanumericWords = words.filter(word => /^[a-zA-Z0-9]+$/.test(word));
    let totalLength = 0;

    for (const word of alphanumericWords) {
        totalLength += word.length;
    }

    return totalLength;
}

  export default wordLengths;