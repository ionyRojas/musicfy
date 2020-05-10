/**
 * fetch the songs from the url
 */
export const getTracks = async () => {
  const results = await fetch(
    'https://my-json-server.typicode.com/ionyRojas/songs/tracks',
  );
  const data = await results.json();

  return data;
};
