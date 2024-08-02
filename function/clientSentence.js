// Function to make GET request and then POST the result
async function fetchAndPostSentence(sentence) {
    // Make a GET request
    const getResponse = await fetch(`/api/word_game?sentence=${encodeURIComponent(sentence)}`);
    const getData = await getResponse.json();
    
    console.log('GET Response:', getData);

    // Prepare the data for POST request
    const postData = {
        sentence: getData.longestWord // For example, you might want to pass the longest word
    };

    // Make a POST request with the data obtained from GET
    const postResponse = await fetch('/api/word_game', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    const postDataResponse = await postResponse.json();
    console.log('POST Response:', postDataResponse);
}
