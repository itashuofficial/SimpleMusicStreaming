const songTitleElement = document.getElementById("song-title");
const artistElement = document.getElementById("artist");
const audioPlayer = document.getElementById("audio-player");

// Replace with real song details
const songDetails = {
  title: "Hamare Sath Shri Raghunath ...",
  artist: "Sarthak",
  audioSource: "https://www.pagalworldl.com/files/download/id/3521"
};

songTitleElement.textContent = songDetails.title;
artistElement.textContent = songDetails.artist;
audioPlayer.src = songDetails.audioSource;
