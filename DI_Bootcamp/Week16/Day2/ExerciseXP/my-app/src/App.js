import React from "react";
import BuggyCounter from "./newcomponents/BuggyCounter";
import ErrorBoundary from "./newcomponents/ErrorBoundary";
import Color from "./newcomponents/Color";

function App() {
  return (
    <>
      
      <h3>
            Click on the number to increase the counter.
      </h3>
      <hr />
      <p>
        These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
      This time, because the BuggyCounter component is not wrapped up in an error boundary, when it crashes, all the other components will be deleted and a blank page with errors will be displayed.
      </p>
      <BuggyCounter />
      <hr />
      <Color />
    </>
  );
}

export default App;

  
