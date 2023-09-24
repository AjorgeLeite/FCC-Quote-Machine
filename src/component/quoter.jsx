import React, { useState, useEffect } from "react";
import "./quoter.css";
import quotes from "../assets/quotes.json";

function Quoter() {
  const [quote, setQuote] = useState("quote");
  const [author, setAuthor] = useState("author");

  const getRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote].quote);
    setAuthor(quotes[randomQuote].author);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <div id="app">
        <div id="quote-box">
          <p id="text">"{quote}"</p>
          <p id="author">-{author}</p>
          <div className="ui">
            <a id="tweet-quote" href="twitter.com/intent/tweet">
              TWITTER
            </a>
            <button onClick={getRandomQuote} id="new-quote">
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quoter;
