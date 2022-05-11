import React from "react";
import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Taufiq",
    text: "Learning react is fun!",
  },
  {
    id: "q2",
    author: "Tauf",
    text: "Learning react is great!",
  },
];
const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
