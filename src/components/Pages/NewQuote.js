import React from "react";
import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";
const NewQuote = () => {
  const history = useHistory();
  const onAddQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quote");
  };
  return (
    <>
      <QuoteForm onAddQuote={onAddQuoteHandler} />;
    </>
  );
};

export default NewQuote;
