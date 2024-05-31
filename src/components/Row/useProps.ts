import { useEffect, useState } from "react";
import axios from "../../axios";
import { Movie } from "../../type.ts";

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      const movies = request.data.result.items.map((movie: Movie) => ({
        id: movie.content_id,
        name: movie.title,
        backdrop_path: movie.imageURL.large,
        poster_path: movie.imageURL.small,
        sample_url: movie.sampleMovieURL ? movie.sampleMovieURL.size_720_480 : undefined,
      }));
      setMovies(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const moviePlayUrl = movie.sample_url;
      if (moviePlayUrl !== undefined) {
        window.open(moviePlayUrl, '_blank');
      }
    }
  };


  return {
    movies,
    trailerUrl,
    handleClick,
  };
};