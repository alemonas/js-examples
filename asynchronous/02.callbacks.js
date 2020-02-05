grabTweets("twitter/alemonas", (error, alemonasTweets) => {
  if (error) {
    throw Error;
  }
  displayTweets(alemonasTweets);
  grabTweets("twitter/elonmusk", (error, elonmusk) => {
    if (error) {
      throw Error;
    }
    displayTweets(elonmusk);
    grabTweets("twitter/JeffBezos", (error, jeffBezos) => {
      if (error) {
        throw Error;
      }
      displayTweets(jeffBezos);
    });
  });
});
