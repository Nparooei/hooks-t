import React, { useState,lazy,Suspense } from 'react';
import Profile from './components/Profile';


const Analytics=lazy(()=>import('./components/Analytics'));

function App() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Profile is loaded immediately */}
      <Profile />

      <button onClick={() => setShowAnalytics(!showAnalytics)}>
        {showAnalytics ? 'Hide Analytics' : 'Show Analytics'}
      </button>

      {/* Analytics is loaded along with the App, even if not needed */}
      {showAnalytics && 
      <Suspense fallback={<div>loading ....</div>}>
        <Analytics />
      </Suspense>
      }
    </div>
  );
}

export default App;
