// ① .envからAPI_KEYを取得
const API_KEY = import.meta.env.VITE_DMM_API_KEY;
const AFFILIATE_ID=import.meta.env.VITE_AFFILIATE_ID;
const BASE_URL = "affiliate/v3/";

// ② named export
export const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&watch_region=JP&language=ja-JP`,
  fetchRanked: `${BASE_URL}ItemList?api_id=${API_KEY}&affiliate_id=${AFFILIATE_ID}&site=FANZA`,
  // fetchNetflixOriginals: `${BASE_URL}${API_KEY}&with_networks=213&watch_region=JP&language=ja`,
  fetchLatest: `${BASE_URL}ItemList?api_id=${API_KEY}&affiliate_id=${AFFILIATE_ID}&site=FANZA&service=digital&floor=videoa&sort=date`,
  fetchTopRated: `${BASE_URL}ItemList?api_id=${API_KEY}&affiliate_id=${AFFILIATE_ID}&site=FANZA&service=digital&floor=videoa&sort=review`,
  // fetchTopRated: `${BASE_URL}${API_KEY}&language=ja-JP`,
  // fetchActionMovies: `${BASE_URL}${API_KEY}&with_genres=10759&watch_region=JP&language=ja-JP`,
  // fetchNewsMovies: `${BASE_URL}${API_KEY}&with_genres=10763&watch_region=JP&language=ja-JP`,
  // fetchKidsMovies: `${BASE_URL}${API_KEY}&with_genres=10762&watch_region=JP&language=ja-JP`,
  // fetchRomanceMovies: `${BASE_URL}${API_KEY}&with_genres=10749&watch_region=JP&language=ja-JP`,
  // fetchDocumentMovies: `${BASE_URL}${API_KEY}&with_genres=99&watch_region=JP&language=ja-JP`,
  // fetchMovieVideos: (movieId: string) =>
  //   `/tv/${movieId}/videos?api_key=${API_KEY}`,
};