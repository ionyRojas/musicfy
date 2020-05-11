/**
 * fetch the songs from the Repo
 * @return {array} data from the fetched url - containt the tracks
 */
export const getTracks = async () => {
  const results = await fetch(
    'https://my-json-server.typicode.com/ionyRojas/songs/tracks',
  );
  const data = await results.json();

  return data;
};
