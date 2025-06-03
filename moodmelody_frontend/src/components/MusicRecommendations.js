import React from "react";
import "./MusicRecommendations.css";

// Demo music data with Spotify and YouTube embeds
const demoTracks = [
  {
    id: 1,
    title: "Good Vibes Only",
    artist: "Sunset Drive",
    mood: "Happy",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2BgEsaKNfHUdlh97KmvFyo?utm_source=generator",
    cover: "https://i.scdn.co/image/ab67616d0000b273a8c32a059fc7ca893e34c5b0",
  },
  {
    id: 2,
    title: "夜に駆ける",
    artist: "YOASOBI",
    mood: "Energetic",
    language: "Japanese",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/x8VYWazR5mE",
    cover: "https://i.ytimg.com/vi/x8VYWazR5mE/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    mood: "Party",
    language: "Spanish",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb?utm_source=generator",
    cover: "https://i.scdn.co/image/ab67616d0000b2734e7b7f1d3692836c3316b8bb",
  },
  {
    id: 4,
    title: "Dreams",
    artist: "Fleetwood Mac",
    mood: "Calm",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/mrZRURcb1cM",
    cover: "https://i.ytimg.com/vi/mrZRURcb1cM/hqdefault.jpg",
  },
  {
    id: 5,
    title: "Relax - Instrumental",
    artist: "Calm Cafe",
    mood: "Relaxed",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/2OEL4P1Rz04",
    cover: "https://i.ytimg.com/vi/2OEL4P1Rz04/hqdefault.jpg",
  },
  // Add more tracks as needed for demo purposes
];

// PUBLIC_INTERFACE
function MusicRecommendations({ mood, languages }) {
  /**
   * Displays a responsive pastel grid of music recommendations based on mood/languages.
   * Props:
   *   - mood: string, selected mood (can be blank)
   *   - languages: array of selected language strings (should be length 0 or 1; only one allowed)
   * For now, uses placeholder demoTracks.
   */

  // Only allow one language selection (enforcement should be done in LanguageSelector, but filter accordingly here)
  const singleLang = Array.isArray(languages) && languages.length > 0 ? languages[0] : null;

  // Strict filtering: BOTH mood and language must match if set, per subtask requirements
  const filtered = demoTracks.filter((track) => {
    // If mood is set, match by lowercased, substring (to allow partial/typed input)
    const moodMatch = !mood || track.mood.toLowerCase().includes(mood.toLowerCase());
    // If a single language is set, match by lowercased, strict equality (no partial, 1:1 mapping as per instructions)
    const langMatch = !singleLang
      ? true
      : track.language.toLowerCase() === singleLang.toLowerCase();
    return moodMatch && langMatch;
  });

  return (
    <div className="music-rec-section">
      <h2 className="music-rec-title">Recommended Tracks</h2>
      <div className="music-grid">
        {(filtered.length > 0 ? filtered : demoTracks).map((track) => (
          <div className="music-card" key={track.id}>
            <div className="music-cover-wrap">
              <img
                src={track.cover}
                alt={`${track.title} cover art`}
                className="music-cover"
                loading="lazy"
              />
              {/* Overlay mood badge */}
              {track.mood && (
                <span className="music-mood-badge">{track.mood}</span>
              )}
            </div>
            <div className="music-info">
              <div className="music-title">{track.title}</div>
              <div className="music-artist">{track.artist}</div>
              <div className="music-language">{track.language}</div>
            </div>
            <div className="music-player-embed">
              {track.type === "spotify" ? (
                <iframe
                  src={track.embedUrl}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title={`Spotify embed for ${track.title}`}
                  loading="lazy"
                />
              ) : track.type === "youtube" ? (
                <iframe
                  width="100%"
                  height="80"
                  src={track.embedUrl}
                  title={`YouTube embed for ${track.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className="music-rec-note">
        <span>🎧 These are demo tracks. Mood &amp; language filters will update live as you select!</span>
      </div>
    </div>
  );
}

export default MusicRecommendations;
