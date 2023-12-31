/* eslint-disable require-jsdoc */
'use strict';

const albumCollection = [
  {
    id: 2125,
    title: 'Use Your Illusion',
    artist: 'Guns N\' Roses',
    tracks: ['November Rain', 'Don\'t Cry'],
  },

  {
    id: 1678,
    title: 'A Night at the Opera',
    artist: 'Queen',
    tracks: [],
  },

  {
    id: 2975,
    title: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },

  {
    id: 1458,
    title: 'Appetite for Destruction',
    artist: 'Guns N\' Roses',
  },

  {
    id: 3590,
    title: 'School\'s Out',
  },

  {
    id: 3257,
    title: 'Space Oddity',
  },

  {
    id: 1257,
    title: 'Transformer',
    artist: 'Lou Reed',
    tracks: ['Vicious', 'Perfect Day', 'Walking on the Wild Side'],
  },
  // Part 2 step 4: add 2 albums
  {
    id: 1066,
    title: 'Stand Together',
    artist: 'The Makem Brothers',
    tracks: ['Stand Together', 'I\'ll Neither Spin Nor Weave'],
  },
  {
    id: 2009,
    title: 'Walls and Windows',
    artist: 'Maura O\'Connell',
    tracks: ['Walls', 'Crazy Love'],
  },
];

/**
 * Returns an array of titles of all the albums in albumCollection
 * @return {array} - an array of titles of all the albums in albumCollection
 */

function getAllTitles() {
  return albumCollection.map((album) => album.title);
}
// uncomment following test code after implementing the function
console.log('Part 2 Step 5: Implement getAllTitles()');
console.log(getAllTitles());

/**
 * Returns albums of the artist in albumCollection
 * @param {string} artist - name of an artist
 * @return {array} an array of albums of the specified artist in albumCollection
 */
function getAlbumsByArtist(artist) {
  return albumCollection.filter((album) => album.artist === artist);
}
// uncomment following test code after implementing the function
console.log('Part 2 Step 6: Implement getAlbumsByArtist(artist)');
console.log(getAlbumsByArtist('Queen'));
console.log(getAlbumsByArtist('Guns N\' Roses'));
console.log(getAlbumsByArtist('ABBA'));

/**
 * Returns the ablum with the specified track
 * @param {string} track - name of a track
 * @return {object} an album object with the specified track
 */
function getAlbumWithTrack(track) {
  let trackFound = false;
  albumCollection.forEach((album) => {
    if (album.tracks !== undefined) {
      if (album.tracks.includes(track)) {
        trackFound = true;
      }
    }
  });
  if (trackFound) {
    return albumCollection.find((album) => album.tracks.includes(track));
  } else {
    return undefined;
  }
}
// uncomment following test code after implementing the function
console.log('Part 2 Step 7: Implement getAlbumWithTrack(track)');
console.log(getAlbumWithTrack('Little Red Corvette'));
console.log(getAlbumWithTrack('November Rain'));
console.log(getAlbumWithTrack('perfect day'));

/**
 * Updates the album with the specified id.
 * @param {*} id - id of an album
 * @param {*} prop - name of a property
 * @param {*} value - new value for the property
 */
function updateAlbum(id, prop, value) {
  // find() returns the first item in the array matching the criteria,
  // in this case we are looking for the album whose id matches the
  // argument 'id'. Store result in albumToUpdate
  const albumToUpdate = albumCollection.find((album) => album.id === id);
  // if given property isn't tracks and given value isn't empty string, then
  // just update the property with the given value.
  if (prop !== 'tracks' && value !== '') {
    albumToUpdate[prop] = value;
    // If property is tracks, make sure album has property tracks,
    // if not then add property with empty array and then push value.
  } else if (prop === 'tracks' && !albumToUpdate.hasOwnProperty('tracks')) {
    albumToUpdate.tracks = [];
    albumToUpdate.tracks.push(value);
    // if property is tracks and value isn't empty string, push value
    // (tracks property exists already if we're in this code block)
  } else if (prop === 'tracks' && value !== '') {
    albumToUpdate.tracks.push(value);
  }
  // if value given is empty string, then delete the given property.
  if (value === '') {
    delete albumToUpdate[prop];
  }
}
// uncomment following test code after implementing the function
console.log('Part 2 Step 8: Implement updateAlbum(id, prop, value)');
updateAlbum(3590, 'artist', 'Alice Cooper');
updateAlbum(3590, 'tracks', 'School\'s Out');
updateAlbum(2125, 'artist', '');
updateAlbum(1678, 'tracks', 'Bohemian Rhapsody');
updateAlbum(2975, 'tracks', 'Free');
updateAlbum(1257, 'tracks', '');
updateAlbum(3257, 'artist', 'David Bowie');
console.log(albumCollection);
