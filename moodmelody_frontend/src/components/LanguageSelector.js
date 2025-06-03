import React, { useState } from "react";
import "./LanguageSelector.css";

// A default list of language options commonly used in music apps.
const DEFAULT_LANGUAGES = [
  "English", "Hindi", "Spanish", "French", "German", "Japanese", "Korean", "Italian", "Portuguese", "Chinese"
];

// PUBLIC_INTERFACE
function LanguageSelector({
  availableLanguages = DEFAULT_LANGUAGES,
  onChange,
  initialSelection = []
}) {
  /**
   * Allows users to select only one language from a pastel chip UI.
   * Props:
   *  - availableLanguages: array of language strings
   *  - onChange: callback with updated array (length 1 or 0) of selected language(s)
   *  - initialSelection: array of initially selected language(s), will use only the first one if multiple
   */
  // Keep the logic simple: state is empty string or one language string, exposed as [lang] or []
  const [selected, setSelected] = useState(
    Array.isArray(initialSelection) && initialSelection.length > 0 ? initialSelection[0] : ""
  );

  // When user clicks a language: select it if not selected, deselect if already selected
  const handleLanguageClick = (lang) => {
    let next = (selected === lang) ? "" : lang;
    setSelected(next);
    onChange && onChange(next ? [next] : []);
  };

  return (
    <div className="language-selector">
      <div className="ls-title">Pick your preferred language</div>
      <div className="ls-chips-wrap" aria-label="Language options">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            className={`ls-chip${selected === lang ? " ls-chip--selected" : ""}`}
            onClick={() => handleLanguageClick(lang)}
            type="button"
            aria-pressed={selected === lang}
            tabIndex={0}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;
