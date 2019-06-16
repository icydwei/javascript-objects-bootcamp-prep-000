var playlist = {
  JustinBieber: "Baby",
  Usher: "Yeah"
}

function updatePlaylist (object, artist, song) {
  object[artist] = song;
  return object
}