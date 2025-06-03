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
function MainContainer() {
  // State for selected mood and languages
  const [mood, setMood] = useState("");
  const [languages, setLanguages] = useState([]);

  return (
    <div className="main-container">
      <section className="selectors-section">
        <MoodSelector onMoodSelect={setMood} initialMood={mood} />
        <LanguageSelector onChange={setLanguages} initialSelection={languages} />
      </section>
      <section className="recommendations-section">
        <MusicRecommendations mood={mood} languages={languages} />
      </section>
    </div>
  );
}

export default MainContainer;
