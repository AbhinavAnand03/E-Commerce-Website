import { useState, useEffect } from "react";
import { getWakaTimeStats } from "../services/wakatimeService";

const WakaTimeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getWakaTimeStats();
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading coding stats...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!stats) return <div>No stats available</div>;

  const { data } = stats;
  const totalHours = Math.round(data.total_seconds / 3600);

  return (
    <div className="wakatime-stats">
      <h3>Coding Activity (Last 7 Days)</h3>
      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-value">{totalHours}h</span>
          <span className="stat-label">Total Time</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{data.daily_average / 3600}hrs</span>
          <span className="stat-label">Daily Average</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{data.languages[0]?.name || "N/A"}</span>
          <span className="stat-label">Top Language</span>
        </div>
      </div>
    </div>
  );
};

export default WakaTimeStats;
