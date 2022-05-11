import { Route, Switch } from "react-router-dom";

import React from "react";
import Layout from "./components/layout/Layout";
import { Suspense } from "react/cjs/react.production.min";
import LoadingSpinner from "./components/UI/LoadingSpinner";
function App() {
  const NewQuote = React.lazy(() => import("./components/Pages/NewQuote"));
  const QuoteDetail = React.lazy(() =>
    import("./components/Pages/QuoteDetail")
  );
  const NopageFound = React.lazy(() =>
    import("./components/Pages/NopageFound")
  );

  const AllQuotes = React.lazy(() => import("./components/Pages/AllQuotes"));
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/quote" exact>
            <AllQuotes />
          </Route>
          <Route path="/quote/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NopageFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
