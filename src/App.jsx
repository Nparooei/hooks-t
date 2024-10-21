import React from 'react';
import ProblemComponent from './components/ProblemComponent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <ErrorBoundary>
        <ProblemComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
