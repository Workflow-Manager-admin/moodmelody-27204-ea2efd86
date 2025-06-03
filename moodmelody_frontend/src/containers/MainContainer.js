import React, { useState } from "react";
import MoodSelector from "../components/MoodSelector";
import LanguageSelector from "../components/LanguageSelector";
import MusicRecommendations from "../components/MusicRecommendations";
import "./MainContainer.css";

/**
 * PUBLIC_INTERFACE
 * MainContainer is the primary orchestrator for MoodMelody user flow.
 * It manages the state for mood and language selection and passes them
 * as props to the relevant child components.
 *
 * Children:
 *  - MoodSelector: emoji/text mood toggle
 *  - LanguageSelector: chip/multi-language selector
 *  - MusicRecommendations: responsive track grid based on selected mood/lang
 */
import { useNavigate } from "react-router-dom";

function MainContainer() {
  // State for selected mood and languages
  const [mood, setMood] = useState("");
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  // Handler for recommend action
  const handleRecommend = () => {
    // Pass state for navigation; fallback for direct links handled on RecommendationsPage
    navigate("/recommendations", {
      state: {
        mood,
        languages,
      },
    });
  };

  const canRecommend = mood.trim().length > 0 || (languages && languages.length > 0);

  return (
    <div className="main-container">
      <section className="selectors-section">
        <MoodSelector onMoodSelect={setMood} initialMood={mood} />
        <LanguageSelector onChange={setLanguages} initialSelection={languages} />
      </section>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 30 }}>
        <button
          className="btn btn-large"
          disabled={!canRecommend}
          onClick={handleRecommend}
          style={{ minWidth: 180, fontSize: "1.09rem" }}
          aria-label="Recommend Songs"
        >
          Recommend
        </button>
      </div>
    </div>
  );
}

export default MainContainer;
