import React, { useState, useEffect } from 'react';

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating data fetching for analytics
    setTimeout(() => {
      setData({ views: 1000, clicks: 500 });
    }, 4000);
  }, []);

  if (!data) {
    return <div>Loading analytics data...</div>;
  }

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total Views: {data.views}</p>
      <p>Total Clicks: {data.clicks}</p>
    </div>
  );
}

export default Analytics;
