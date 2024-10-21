import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service eg data dog 
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render any fallback UI
      return <>
      <h1>Something went wrong</h1>
      <h2>Please call support at 01234567891011121314</h2>
      </>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
