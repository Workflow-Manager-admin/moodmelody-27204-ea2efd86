import React, { useState } from "react";
import "./LanguageSelector.css";

// A default list of language options commonly used in music apps.
const DEFAULT_LANGUAGES = [
  "English", "Hindi", "Spanish", "French", "German", "Japanese", "Korean", "Italian", "Portuguese", "Chinese"
];

// PUBLIC_INTERFACE
function LanguageSelector({ availableLanguages = DEFAULT_LANGUAGES, onChange, initialSelection = [] }) {
  /**
   * Allows users to multi-select preferred languages from a pastel chip UI.
   * Props:
   *  - availableLanguages: array of language strings
   *  - onChange: callback with updated array of selected languages
   *  - initialSelection: array of initially selected languages
   */
  const [selected, setSelected] = useState(initialSelection);

  const toggleLanguage = (lang) => {
    let next;
    if (selected.includes(lang)) {
      next = selected.filter((l) => l !== lang);
    } else {
      next = [...selected, lang];
    }
    setSelected(next);
    onChange && onChange(next);
  };

  return (
    <div className="language-selector">
      <div className="ls-title">Pick your preferred languages</div>
      <div className="ls-chips-wrap" aria-label="Language options">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            className={`ls-chip${selected.includes(lang) ? " ls-chip--selected" : ""}`}
            onClick={() => toggleLanguage(lang)}
            type="button"
            aria-pressed={selected.includes(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;
