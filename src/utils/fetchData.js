export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6240728001msh1941b45774cc2dbp163e4ajsn19ae93f3d5f7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const videoOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6240728001msh1941b45774cc2dbp163e4ajsn19ae93f3d5f7",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
