import React from "react";
import "./MusicRecommendations.css";

/**
 * Demo music data with Spotify and YouTube embeds
 * Expanded for various moods/languages.
 */
const demoTracks = [
  // --- Happy ---
  {
    id: 1,
    title: "Good Vibes Only",
    artist: "Sunset Drive",
    mood: "Happy",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2BgEsaKNfHUdlh97KmvFyo",
    cover: "https://i.scdn.co/image/ab67616d0000b273a8c32a059fc7ca893e34c5b0",
  },
  {
    id: 2,
    title: "Pharrell Williams - Happy",
    artist: "Pharrell Williams",
    mood: "Happy",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/ZbZSe6N_BXs",
    cover: "https://i.ytimg.com/vi/ZbZSe6N_BXs/hqdefault.jpg",
  },
  {
    id: 3,
    title: "Dil Dhadakne Do",
    artist: "Priyanka Chopra, Farhan Akhtar",
    mood: "Happy",
    language: "Hindi",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/4DpkZpdaYDwFJfBBRQJ5PM",
    cover: "https://i.scdn.co/image/ab67616d0000b273ecea45f80c382cff049e611a",
  },
  {
    id: 4,
    title: "Vivir Mi Vida",
    artist: "Marc Anthony",
    mood: "Happy",
    language: "Spanish",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2BbdG5lG0k8G4JKKq8D3B7",
    cover: "https://i.scdn.co/image/ab67616d0000b2736cbad11cee52e6c58a384e19",
  },
  {
    id: 5,
    title: "C'est La Vie",
    artist: "Khaled",
    mood: "Happy",
    language: "French",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/HwmgeVbN_Rw",
    cover: "https://i.ytimg.com/vi/HwmgeVbN_Rw/hqdefault.jpg",
  },

  // --- Sad ---
  {
    id: 6,
    title: "Someone Like You",
    artist: "Adele",
    mood: "Sad",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB",
    cover: "https://i.scdn.co/image/ab67616d0000b273edcff8a3758b81d27c4b8f8e",
  },
  {
    id: 7,
    title: "Channa Mereya",
    artist: "Arijit Singh",
    mood: "Sad",
    language: "Hindi",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/284Ov7ysmfA",
    cover: "https://i.ytimg.com/vi/284Ov7ysmfA/hqdefault.jpg",
  },
  {
    id: 8,
    title: "Fix You",
    artist: "Coldplay",
    mood: "Sad",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/6FMQlGB8GB4KQ7wlQ6gCvi",
    cover: "https://i.scdn.co/image/ab67616d0000b2734192771c1b36988e7eb66abe",
  },
  {
    id: 9,
    title: "Nada Valgo Sin Tu Amor",
    artist: "Juanes",
    mood: "Sad",
    language: "Spanish",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/OjCK1O8K8GM",
    cover: "https://i.ytimg.com/vi/OjCK1O8K8GM/hqdefault.jpg",
  },

  // --- Energetic ---
  {
    id: 10,
    title: "夜に駆ける",
    artist: "YOASOBI",
    mood: "Energetic",
    language: "Japanese",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/x8VYWazR5mE",
    cover: "https://i.ytimg.com/vi/x8VYWazR5mE/hqdefault.jpg",
  },
  {
    id: 11,
    title: "Don't Start Now",
    artist: "Dua Lipa",
    mood: "Energetic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/3PfIrDoz19wz7qK7tYeu62",
    cover: "https://i.scdn.co/image/ab67616d0000b27335e682f7d33e0e6c64cf6cec",
  },
  {
    id: 12,
    title: "BTS - Dynamite",
    artist: "BTS",
    mood: "Energetic",
    language: "Korean",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/gdZLi9oWNZg",
    cover: "https://i.ytimg.com/vi/gdZLi9oWNZg/hqdefault.jpg",
  },
  {
    id: 13,
    title: "Ai Se Eu Te Pego",
    artist: "Michel Teló",
    mood: "Energetic",
    language: "Portuguese",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/1hxN8TtSbSF3lQ1I4dPRiL",
    cover: "https://i.scdn.co/image/ab67616d0000b273de6101957cb685818218c863",
  },
  {
    id: 14,
    title: "Titanium (feat. Sia)",
    artist: "David Guetta, Sia",
    mood: "Energetic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/7w87IxuO7BDcJ3YUqCyMTT",
    cover: "https://i.scdn.co/image/ab67616d0000b2731c2170d7c86f1769d2d67c9e",
  },

  // --- Party ---
  {
    id: 15,
    title: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    mood: "Party",
    language: "Spanish",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb",
    cover: "https://i.scdn.co/image/ab67616d0000b2734e7b7f1d3692836c3316b8bb",
  },
  {
    id: 16,
    title: "Taki Taki",
    artist: "DJ Snake, Selena Gomez, Ozuna, Cardi B",
    mood: "Party",
    language: "Spanish",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/ixkoVwKQaJg",
    cover: "https://i.ytimg.com/vi/ixkoVwKQaJg/hqdefault.jpg",
  },
  {
    id: 17,
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    mood: "Party",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS",
    cover: "https://i.scdn.co/image/ab67616d0000b2737278dbb151dfa16b8c58a8f7",
  },
  {
    id: 18,
    title: "Jai Jai Shivshankar",
    artist: "Vishal & Shekhar, Benny Dayal, Vishal Dadlani",
    mood: "Party",
    language: "Hindi",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/oL8y7oQ1Jc0",
    cover: "https://i.ytimg.com/vi/oL8y7oQ1Jc0/hqdefault.jpg",
  },

  // --- Calm ---
  {
    id: 19,
    title: "Dreams",
    artist: "Fleetwood Mac",
    mood: "Calm",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/mrZRURcb1cM",
    cover: "https://i.ytimg.com/vi/mrZRURcb1cM/hqdefault.jpg",
  },
  {
    id: 20,
    title: "River Flows In You",
    artist: "Yiruma",
    mood: "Calm",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/7maJOI3QMu0",
    cover: "https://i.ytimg.com/vi/7maJOI3QMu0/hqdefault.jpg",
  },
  {
    id: 21,
    title: "Lofi Rain",
    artist: "Lo-Fi Jazz Records",
    mood: "Calm",
    language: "Instrumental",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/1Cx04MwRjqizvPIX6fdvuN",
    cover: "https://i.scdn.co/image/ab67616d0000b273525099ba6e3dc8e334c41e39",
  },
  {
    id: 22,
    title: "Sous le Ciel de Paris",
    artist: "Édith Piaf",
    mood: "Calm",
    language: "French",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/vLlQJ6C6fWY",
    cover: "https://i.ytimg.com/vi/vLlQJ6C6fWY/hqdefault.jpg",
  },

  // --- Relaxed ---
  {
    id: 23,
    title: "Relax - Instrumental",
    artist: "Calm Cafe",
    mood: "Relaxed",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/2OEL4P1Rz04",
    cover: "https://i.ytimg.com/vi/2OEL4P1Rz04/hqdefault.jpg",
  },
  {
    id: 24,
    title: "Weightless",
    artist: "Marconi Union",
    mood: "Relaxed",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/7KWvUpc0K1QGgE4Oxxg3g6",
    cover: "https://i.scdn.co/image/ab67616d0000b27355441c4182b2f07b7f7f3c6a",
  },
  {
    id: 25,
    title: "Let Her Go",
    artist: "Passenger",
    mood: "Relaxed",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/3dYD57lREq7cP8fyloLrRP",
    cover: "https://i.scdn.co/image/ab67616d0000b273c72c05e74ac9a73c7c3e7ef7",
  },

  // --- Angry ---
  {
    id: 26,
    title: "In The End",
    artist: "Linkin Park",
    mood: "Angry",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/eVTXPUF4Oz4",
    cover: "https://i.ytimg.com/vi/eVTXPUF4Oz4/hqdefault.jpg",
  },
  {
    id: 27,
    title: "Break Stuff",
    artist: "Limp Bizkit",
    mood: "Angry",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/3qT4bUD1MaWpGrTwcvguhb",
    cover: "https://i.scdn.co/image/ab67616d0000b2739a9f9cbeabc04463acf34981",
  },
  {
    id: 28,
    title: "Dhoom Again",
    artist: "Vishal Dadlani, Dominique Cerejo",
    mood: "Angry",
    language: "Hindi",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/HY7RHR7XU_U",
    cover: "https://i.ytimg.com/vi/HY7RHR7XU_U/hqdefault.jpg",
  },

  // --- Love ---
  {
    id: 29,
    title: "Perfect",
    artist: "Ed Sheeran",
    mood: "Love",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v",
    cover: "https://i.scdn.co/image/ab67616d0000b2733a5d72b3e8c8ba9ab0585b6b",
  },
  {
    id: 30,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    mood: "Love",
    language: "Hindi",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/Umqb9KENgmk",
    cover: "https://i.ytimg.com/vi/Umqb9KENgmk/hqdefault.jpg",
  },
  {
    id: 31,
    title: "Te Amo",
    artist: "Rihanna",
    mood: "Love",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/1Am3r3oU8ZyzIAdK8U6jZq",
    cover: "https://i.scdn.co/image/ab67616d0000b2730e9a427f1e59be4b4107f2fa",
  },
  {
    id: 32,
    title: "Je t'aime... moi non plus",
    artist: "Serge Gainsbourg, Jane Birkin",
    mood: "Love",
    language: "French",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/k3Fa4lOQfbA",
    cover: "https://i.ytimg.com/vi/k3Fa4lOQfbA/hqdefault.jpg",
  },

  // --- Thoughtful ---
  {
    id: 33,
    title: "Lost Stars",
    artist: "Adam Levine",
    mood: "Thoughtful",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2takcwOaAZWiXQijPHIx7B",
    cover: "https://i.scdn.co/image/ab67616d0000b27314390b0696d1f9c48c0a8416",
  },
  {
    id: 34,
    title: "The Nights",
    artist: "Avicii",
    mood: "Thoughtful",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/0ct6r3EGTcMLPtrXhdnGAl",
    cover: "https://i.scdn.co/image/ab67616d0000b2731be1ae2e95e81b5aea14c7ab",
  },
  {
    id: 35,
    title: "Photograph",
    artist: "Ed Sheeran",
    mood: "Thoughtful",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/3T4tUhGYeRNVUGevb0wThu",
    cover: "https://i.scdn.co/image/ab67616d0000b273263d3d17a2f7f9d25431c9f1",
  },

  // --- Sleepy ---
  {
    id: 36,
    title: "Weightless",
    artist: "Marconi Union",
    mood: "Sleepy",
    language: "Instrumental",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/7KWvUpc0K1QGgE4Oxxg3g6",
    cover: "https://i.scdn.co/image/ab67616d0000b27355441c4182b2f07b7f7f3c6a",
  },
  {
    id: 37,
    title: "月光 (Moonlight Sonata)",
    artist: "Ludwig van Beethoven",
    mood: "Sleepy",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/4Tr0otuiQuU",
    cover: "https://i.ytimg.com/vi/4Tr0otuiQuU/hqdefault.jpg",
  },

  // Add even more variety for diversity across moods/languages if needed
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
