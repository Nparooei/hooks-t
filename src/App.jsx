import React, { useState } from 'react';
import Profile from './components/Profile';
import Analytics from './components/Analytics'; // Loaded immediately, even if not needed

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
      {showAnalytics && <Analytics />}
    </div>
  );
}

export default App;
