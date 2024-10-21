import React from 'react';

function ProblemComponent() {
  // This will throw an error
  throw new Error('Oops! Something went wrong.');
  return <div>This won't be rendered.</div>;
}

export default ProblemComponent;