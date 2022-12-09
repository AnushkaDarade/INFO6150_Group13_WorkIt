import React, { useState, useEffect } from "react";
import "./Quotes.css";


const url = "https://api.quotable.io/random";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;
  return (

    <center>
    <div className="box-centerside">
      <div className="text">
        <center><p>{content}</p></center>
      </div>
      <div className="author">
        <h5>{author}</h5>
        <div className="button-container">
          <center><button className="twitter-button" onClick={tweetQuote}>
            <i className="fab fa-twitter"></i>
          </button></center>
          <center><button onClick={getNewQuote}><center>New Quote</center></button></center>
        </div>
      </div>
    </div>
    </center>
  );
};

export default Quotes;
