
const fetchApi = async (name_source) => {
  const res = await fetch(
    `https://mindx-mockup-server.vercel.app/api/resources/${name_source}?apiKey=6957348a9dda81df11d0c527`
  );
  const json = await res.json();
  return json?.data?.data || [];
};

export default fetchApi;
