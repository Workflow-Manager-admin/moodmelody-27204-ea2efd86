import React, { useState } from "react";
import "./AdminDashboard.css";

// Mock initial mappings (for demonstration)
const MOCK_MAPPINGS = [
  { mood: "Happy", language: "English", song: "Good Vibes" },
  { mood: "Party", language: "Spanish", song: "Despacito" },
  { mood: "Calm", language: "Japanese", song: "夜に駆ける" }
];

// Dummy analytics data
const MOCK_ANALYTICS = [
  { label: "Happy", value: 21 },
  { label: "Sad", value: 7 },
  { label: "Party", value: 12 },
  { label: "Calm", value: 15 }
];

// Pie chart rendering helper (using simple SVG, no dependency)
function AnalyticsPie({ data }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;
  let colors = ["#A7C7E7", "#F7CAC9", "#F6E2B3", "#97b6d8", "#f9d1c7"];
  return (
    <svg viewBox="0 0 38 38" className="admin-analytics-pie" width="110" height="110">
      {data.map((d, i) => {
        const val = d.value / total;
        const start = cumulative;
        const end = cumulative + val;
        cumulative = end;
        const largeArc = val > 0.5 ? 1 : 0;
        const angle = 2 * Math.PI * (end - start);
        // Circumference 2πr with r=15, center=(19,19)
        const getCoord = (t) => [
          19 + 15 * Math.cos(2 * Math.PI * t - Math.PI / 2),
          19 + 15 * Math.sin(2 * Math.PI * t - Math.PI / 2)
        ];
        const [x1, y1] = getCoord(start);
        const [x2, y2] = getCoord(end);
        return (
          <path
            key={d.label}
            d={`M19 19 L${x1} ${y1} A15 15 0 ${largeArc} 1 ${x2} ${y2} Z`}
            fill={colors[i % colors.length]}
            stroke="#fff"
            strokeWidth="1"
          >
            <title>{`${d.label}: ${d.value}`}</title>
          </path>
        );
      })}
      {/* Circle background */}
      <circle cx="19" cy="19" r="15" fill="#eee" opacity="0.1" />
    </svg>
  );
}

// PUBLIC_INTERFACE
function AdminDashboard() {
  /**
   * AdminDashboard manages moods-languages-songs mapping and shows analytics.
   * - Displays list of mappings (add/edit/delete local state only)
   * - Shows mock analytics pie chart (state only, no backend)
   */
  const [mappings, setMappings] = useState(MOCK_MAPPINGS);
  const [editing, setEditing] = useState(null);
  const [newEntry, setNewEntry] = useState({ mood: "", language: "", song: "" });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (index != null) {
      // Editing existing
      setMappings(mappings =>
        mappings.map((item, i) =>
          i === index ? { ...item, [name]: value } : item
        )
      );
    } else {
      // New entry
      setNewEntry(prev => ({ ...prev, [name]: value }));
    }
  };

  const addMapping = e => {
    e.preventDefault();
    if (!newEntry.mood || !newEntry.language || !newEntry.song) return;
    setMappings([...mappings, newEntry]);
    setNewEntry({ mood: "", language: "", song: "" });
  };

  const deleteMapping = idx => {
    setMappings(mappings.filter((_, i) => i !== idx));
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h2 className="title">Admin Dashboard</h2>
        <span className="description">
          Manage Mood &#8594; Language &#8594; Song mapping &amp; view analytics.<br/>
          (Changes are local only &ndash; no backend persistence)<br/>
        </span>
      </div>

      <div className="admin-sections-flex">
        {/* Mood-Language-Song Mapping Management */}
        <section className="admin-mapping-section">
          <h3 className="admin-section-title">Mood-Language-Song Mapping</h3>
          <table className="admin-mapping-table">
            <thead>
              <tr>
                <th>Mood</th>
                <th>Language</th>
                <th>Song</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {mappings.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <input
                    type="text"
                    name="mood"
                    value={item.mood}
                    onChange={e => handleChange(e, idx)}
                    className="admin-mapping-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="language"
                    value={item.language}
                    onChange={e => handleChange(e, idx)}
                    className="admin-mapping-input"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="song"
                    value={item.song}
                    onChange={e => handleChange(e, idx)}
                    className="admin-mapping-input"
                  />
                </td>
                <td>
                  <button className="admin-mapping-action-btn" onClick={() => deleteMapping(idx)}>
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            {/* Add new mapping inline */}
            <tr>
              <td>
                <input
                  type="text"
                  name="mood"
                  value={newEntry.mood}
                  onChange={e => handleChange(e, null)}
                  className="admin-mapping-input"
                  placeholder="Mood"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="language"
                  value={newEntry.language}
                  onChange={e => handleChange(e, null)}
                  className="admin-mapping-input"
                  placeholder="Language"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="song"
                  value={newEntry.song}
                  onChange={e => handleChange(e, null)}
                  className="admin-mapping-input"
                  placeholder="Song"
                />
              </td>
              <td>
                <button className="admin-mapping-action-btn add" onClick={addMapping} title="Add Mapping">
                  ➕
                </button>
              </td>
            </tr>
            </tbody>
          </table>
        </section>
        {/* Analytics Mock Pie */}
        <section className="admin-analytics-section">
          <h3 className="admin-section-title">Mock User Mood Analytics</h3>
          <div className="admin-analytics-chart-wrap">
            <AnalyticsPie data={MOCK_ANALYTICS} />
            <ul className="admin-analytics-legend">
              {MOCK_ANALYTICS.map((item, idx) => (
                <li key={item.label} style={{ color: ["#A7C7E7", "#F7CAC9", "#F6E2B3", "#97b6d8", "#f9d1c7"][idx%5] }}>
                  <span className="admin-analytics-dot" /> {item.label} ({item.value})
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;
