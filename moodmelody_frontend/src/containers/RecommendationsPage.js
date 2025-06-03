import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import MusicRecommendations from "../components/MusicRecommendations";

// PUBLIC_INTERFACE
/**
 * RecommendationsPage displays embedded song recommendations for a given mood and languages.
 * - Reads state (or fallback to query params) from location.
 * - Renders the MusicRecommendations grid.
 * - Allows 'Back' navigation to home.
 */
function RecommendationsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // Prefer location.state, fallback to URL params
  let mood = "";
  let languages = [];

  if (location.state && (location.state.mood || location.state.languages)) {
    mood = location.state.mood || "";
    languages = location.state.languages || [];
  } else {
    // Fallback to query params (?mood=x&languages=eng,hin)
    mood = params.get("mood") || "";
    const langs = params.get("languages");
    if (langs) {
      languages = langs.split(",");
    }
  }

  return (
    <div className="container" style={{paddingTop:32}}>
      <button
        className="btn btn-nav"
        style={{marginBottom: 18}}
        onClick={() => navigate("/")}
      >← Back</button>
      <MusicRecommendations mood={mood} languages={languages} />
    </div>
  );
}

export default RecommendationsPage;
