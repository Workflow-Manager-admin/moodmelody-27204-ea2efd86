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

    // --- Motivational ---
  {
    id: 38,
    title: "Eye of the Tiger",
    artist: "Survivor",
    mood: "Motivational",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2Kh43m04B1UkVcpcRa1Zug",
    cover: "https://i.scdn.co/image/ab67616d0000b27360bb372d968e6e854b7d04a8",
  },
  {
    id: 39,
    title: "Hall of Fame",
    artist: "The Script ft. will.i.am",
    mood: "Motivational",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/mk48xRzuNvA",
    cover: "https://i.ytimg.com/vi/mk48xRzuNvA/hqdefault.jpg",
  },
  {
    id: 40,
    title: "Zinda",
    artist: "Siddharth Mahadevan",
    mood: "Motivational",
    language: "Hindi",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/3nAq2hCr1oWsiu8CYbL5dK",
    cover: "https://i.scdn.co/image/ab67616d0000b2738e4ff1a8c6b8e59a30b94f35",
  },

  // --- Classical ---
  {
    id: 41,
    title: "Canon in D",
    artist: "Pachelbel",
    mood: "Calm",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/JvNQLJ1_HQ0",
    cover: "https://i.ytimg.com/vi/JvNQLJ1_HQ0/hqdefault.jpg",
  },
  {
    id: 42,
    title: "Nocturne op.9 No.2",
    artist: "Frédéric Chopin",
    mood: "Calm",
    language: "Instrumental",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/4JeaGn2xp3Q979pAXIEIed",
    cover: "https://i.scdn.co/image/ab67616d0000b2732fba931307d3b0c2e8d2ce73",
  },
  {
    id: 43,
    title: "春の海 (Haru no Umi)",
    artist: "Michio Miyagi",
    mood: "Calm",
    language: "Japanese",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/MGHtBadGkUY",
    cover: "https://i.ytimg.com/vi/MGHtBadGkUY/hqdefault.jpg",
  },

  // --- Jazz, Blues ---
  {
    id: 44,
    title: "What a Wonderful World",
    artist: "Louis Armstrong",
    mood: "Nostalgic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/0IoMe1L8zMcF9ujn2YCOjo",
    cover: "https://i.scdn.co/image/ab67616d0000b273f06a68af87a3120565c527fd",
  },
  {
    id: 45,
    title: "Feeling Good",
    artist: "Nina Simone",
    mood: "Energetic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/5vdp5UmvTsnMEMESIF2Ym7",
    cover: "https://i.scdn.co/image/ab67616d0000b2736b1d1bb2964e484d0e8e7bcb",
  },
  {
    id: 46,
    title: "Take Five",
    artist: "The Dave Brubeck Quartet",
    mood: "Cool",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/vmDDOFXSgAs",
    cover: "https://i.ytimg.com/vi/vmDDOFXSgAs/hqdefault.jpg",
  },

  // --- Rock/Metal ---
  {
    id: 47,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    mood: "Epic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J",
    cover: "https://i.scdn.co/image/ab67616d0000b2737dffa9e397617c61d8c77fcb",
  },
  {
    id: 48,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    mood: "Angry",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/5ghIJDpPoe3CfHMGu71E6T",
    cover: "https://i.scdn.co/image/ab67616d0000b273dd6394ed692ad5e6e95b1d47",
  },
  {
    id: 49,
    title: "Highway to Hell",
    artist: "AC/DC",
    mood: "Energetic",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/l482T0yNkeo",
    cover: "https://i.ytimg.com/vi/l482T0yNkeo/hqdefault.jpg",
  },

  // --- EDM/Electronic ---
  {
    id: 50,
    title: "Wake Me Up",
    artist: "Avicii",
    mood: "Energetic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/6s6UO6nU6a0BS5vmtK17yn",
    cover: "https://i.scdn.co/image/ab67616d0000b273c6fc2e02211b2a01c65b0ab6",
  },
  {
    id: 51,
    title: "On My Mind",
    artist: "Diplo & SIDEPIECE",
    mood: "Energetic",
    language: "English",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/44n8uWAjWbKWGoYyQ2JvVl",
    cover: "https://i.scdn.co/image/ab67616d0000b273eddbc9c6850193bb264a8287",
  },
  {
    id: 52,
    title: "Animals",
    artist: "Martin Garrix",
    mood: "Energetic",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/gCYcHz2k5x0",
    cover: "https://i.ytimg.com/vi/gCYcHz2k5x0/hqdefault.jpg",
  },

  // --- Folk/World ---
  {
    id: 53,
    title: "Kesariya",
    artist: "Arijit Singh",
    mood: "Romantic",
    language: "Hindi",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/4m6ag1fP6bV5x6mt8G8gZS",
    cover: "https://i.scdn.co/image/ab67616d0000b273130e1d7a3525a3b39d9a7c2d",
  },
  {
    id: 54,
    title: "Scarborough Fair",
    artist: "Simon & Garfunkel",
    mood: "Nostalgic",
    language: "English",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/-BakWVXHSug",
    cover: "https://i.ytimg.com/vi/-BakWVXHSug/hqdefault.jpg",
  },
  {
    id: 55,
    title: "Siyahamba",
    artist: "Zulu Choir",
    mood: "Motivational",
    language: "Zulu",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/1Ho4-tMm-4E",
    cover: "https://i.ytimg.com/vi/1Ho4-tMm-4E/hqdefault.jpg",
  },

  // --- Korean/Asian Pop ---
  {
    id: 56,
    title: "Ddu-Du Ddu-Du",
    artist: "BLACKPINK",
    mood: "Energetic",
    language: "Korean",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2MpP1i4G4Xw2w5k6Uu7HUV",
    cover: "https://i.scdn.co/image/ab67616d0000b273ab0568f1e875d4fe258400c6",
  },
  {
    id: 57,
    title: "Gangnam Style",
    artist: "PSY",
    mood: "Party",
    language: "Korean",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    cover: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
  },

  // --- French International ---
  {
    id: 58,
    title: "Dernière danse",
    artist: "Indila",
    mood: "Sad",
    language: "French",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/0ZQDfN2zdfaW4T4NB7sF3h",
    cover: "https://i.scdn.co/image/ab67616d0000b27335c7ca900e4e1b98f29f41e2",
  },
  {
    id: 59,
    title: "Papaoutai",
    artist: "Stromae",
    mood: "Energetic",
    language: "French",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/1qEmFfgcLObUfQm0j1W2CK",
    cover: "https://i.scdn.co/image/ab67616d0000b2739561a527e8bcfb9a7f19e293",
  },

  // --- Spanish Latin/Pop ---
  {
    id: 60,
    title: "La Bicicleta",
    artist: "Carlos Vives & Shakira",
    mood: "Happy",
    language: "Spanish",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/-UV0QGLmYys",
    cover: "https://i.ytimg.com/vi/-UV0QGLmYys/hqdefault.jpg",
  },
  {
    id: 61,
    title: "Bésame Mucho",
    artist: "Consuelo Velázquez",
    mood: "Romantic",
    language: "Spanish",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/4N7E7Euqug7zIFzcf1y6CR",
    cover: "https://i.scdn.co/image/ab67616d0000b273dfe80c34bfae5ef3e3cd36af",
  },

  // --- Italian/Euro ---
  {
    id: 62,
    title: "Volare (Nel blu dipinto di blu)",
    artist: "Domenico Modugno",
    mood: "Happy",
    language: "Italian",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/Z-DVi0ugelc",
    cover: "https://i.ytimg.com/vi/Z-DVi0ugelc/hqdefault.jpg",
  },
  {
    id: 63,
    title: "Con te partirò",
    artist: "Andrea Bocelli",
    mood: "Nostalgic",
    language: "Italian",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/5fVZC9GiM4e8vu99W0Xf6J",
    cover: "https://i.scdn.co/image/ab67616d0000b273dba74b22597241992082c7d0",
  },

  // --- Mandarin/Chinese ---
  {
    id: 64,
    title: "小幸运 (A Little Happiness)",
    artist: "Hebbe Tien",
    mood: "Romantic",
    language: "Chinese",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/j3CcYSyeK7w",
    cover: "https://i.ytimg.com/vi/j3CcYSyeK7w/hqdefault.jpg",
  },
  {
    id: 65,
    title: "夜曲 (Nocturne)",
    artist: "Jay Chou",
    mood: "Thoughtful",
    language: "Chinese",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/3oB2XOgqD7MgFofa4OHc3P",
    cover: "https://i.scdn.co/image/ab67616d0000b27329c09c9d463e0c345b2d2587",
  },

  // --- Folk/World - Turkish ---
  {
    id: 66,
    title: "Benimle Oynama",
    artist: "Sezen Aksu",
    mood: "Sad",
    language: "Turkish",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/iQhnB6IbQhA",
    cover: "https://i.ytimg.com/vi/iQhnB6IbQhA/hqdefault.jpg",
  },
  {
    id: 67,
    title: "Deli",
    artist: "Mor ve Ötesi",
    mood: "Energetic",
    language: "Turkish",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/1HrNRXS6ANWnHbbE1mwFv3",
    cover: "https://i.scdn.co/image/ab67616d0000b27377a8f8f293b8aeff38f64f97",
  },

  // --- Add even more world/inclusive tracks, as needed ---
  {
    id: 68,
    title: "Jerusalema",
    artist: "Master KG feat. Nomcebo Zikode",
    mood: "Party",
    language: "Zulu",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/fTZjJv3ADpA",
    cover: "https://i.ytimg.com/vi/fTZjJv3ADpA/hqdefault.jpg",
  },
  {
    id: 69,
    title: "Zusammen",
    artist: "Die Fantastischen Vier ft. Clueso",
    mood: "Energetic",
    language: "German",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/5hnxQD57wc5bRZfM527ob7",
    cover: "https://i.scdn.co/image/ab67616d0000b2737857be6dc60e4a0e21e1a190",
  },
  {
    id: 70,
    title: "99 Luftballons",
    artist: "Nena",
    mood: "Nostalgic",
    language: "German",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/La4Dcd1aUcE",
    cover: "https://i.ytimg.com/vi/La4Dcd1aUcE/hqdefault.jpg",
  },

  // --- Norwegian/Scandinavian ---
  {
    id: 71,
    title: "Take On Me",
    artist: "a-ha",
    mood: "Energetic",
    language: "Norwegian",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L",
    cover: "https://i.scdn.co/image/ab67616d0000b273a6a63c6c3eef9e7b1224c64b",
  },

  // --- Bollywood/Indian Various ---
  {
    id: 72,
    title: "Kabira",
    artist: "Arijit Singh, Harshdeep Kaur",
    mood: "Nostalgic",
    language: "Hindi",
    type: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/0NBMZcH9QWJJ5eQFQ2BwiS",
    cover: "https://i.scdn.co/image/ab67616d0000b2736c2206c6f08dbe2fc6d1bd6e",
  },
  {
    id: 73,
    title: "Laung Laachi",
    artist: "Maanat Noor",
    mood: "Romantic",
    language: "Punjabi",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/LgVi6PRpOUQ",
    cover: "https://i.ytimg.com/vi/LgVi6PRpOUQ/hqdefault.jpg",
  },

  // --- Arabic/World ---
  {
    id: 74,
    title: "Tamally Maak",
    artist: "Amr Diab",
    mood: "Romantic",
    language: "Arabic",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/fJxLA2GwsrI",
    cover: "https://i.ytimg.com/vi/fJxLA2GwsrI/hqdefault.jpg",
  },

  // --- Lofi/Chillhop/Coding Focus ---
  {
    id: 75,
    title: "Lofi Coding Beats",
    artist: "Lo-Fi Geek",
    mood: "Thoughtful",
    language: "Instrumental",
    type: "youtube",
    embedUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    cover: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
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
            <div className="music-cover-wrap" aria-label="Album art">
              <img
                src={track.cover}
                alt={`${track.title} album art`}
                className="music-cover"
                loading="lazy"
                style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {track.mood && (
                <span className="music-mood-badge">{track.mood}</span>
              )}
            </div>
            <div className="music-info">
              <div className="music-title">{track.title}</div>
              <div className="music-artist">{track.artist}</div>
              <div className="music-language">{track.language}</div>
            </div>
            <div className="music-player-embed" aria-label={`Player for ${track.title}`}>
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
                  aria-label={`Spotify player for ${track.title}`}
                  style={{ border: 0, minHeight: 80, background: "#f6e2b3"}}
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
                  aria-label={`YouTube player for ${track.title}`}
                  style={{ border: 0, minHeight: 80, background: "#f6e2b3"}}
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
