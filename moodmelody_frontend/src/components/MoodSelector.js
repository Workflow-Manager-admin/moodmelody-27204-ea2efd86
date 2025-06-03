import React, { useState } from "react";
import "./MoodSelector.css";

// PUBLIC_INTERFACE
function MoodSelector({ onMoodSelect, initialMood = "" }) {
  /** 
   * This component allows users to select a mood via emoji or enter mood text.
   * Props:
   * - onMoodSelect: callback called with string mood value
   * - initialMood: string for pre-set mood (optional)
   */

  const emojiMoods = [
    { emoji: "😃", label: "Happy" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😎", label: "Cool" },
    { emoji: "😡", label: "Angry" },
    { emoji: "🥳", label: "Party" },
    { emoji: "😴", label: "Sleepy" },
    { emoji: "🤔", label: "Thoughtful" },
    { emoji: "❤️", label: "Love" },
    { emoji: "😌", label: "Relaxed" }
  ];

  const [selectedMood, setSelectedMood] = useState(initialMood);

  // Handle emoji selection
  const handleEmojiSelect = (emojiLabel) => {
    setSelectedMood(emojiLabel);
    onMoodSelect && onMoodSelect(emojiLabel);
  };

  // Handle text input
  const handleInputChange = (e) => {
    setSelectedMood(e.target.value);
    onMoodSelect && onMoodSelect(e.target.value);
  };

  return (
    <div className="mood-selector">
      <div className="ms-title">Select your mood</div>
      <div className="ms-emoji-list" aria-label="Mood emoji options">
        {emojiMoods.map((mood) => (
          <button
            key={mood.emoji}
            className={`ms-emoji-btn${selectedMood === mood.label ? " ms-emoji-btn--selected" : ""}`}
            onClick={() => handleEmojiSelect(mood.label)}
            aria-label={mood.label}
            type="button"
          >
            <span role="img" aria-label={mood.label}>
              {mood.emoji}
            </span>
          </button>
        ))}
      </div>
      <div className="ms-or-label">or type your mood</div>
      <input
        type="text"
        className="ms-input"
        value={selectedMood}
        onChange={handleInputChange}
        aria-label="Custom mood input"
        placeholder="e.g. Energetic, Calm..."
      />
    </div>
  );
}

export default MoodSelector;
