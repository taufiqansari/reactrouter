import React from "react";
import { useParams, Route, Link } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";
import Comments from "../comments/Comments";
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
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return (
      <p>
        <strong>No quotes found !</strong>
      </p>
    );
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className="centered">
        <Route path={`/quote/${params.quoteId}`} exact>
          <Link className="btn--flat" to={`/quote/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </Route>
      </div>
      <Route path={`/quote/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
