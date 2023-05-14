import { TMDBResponse } from "@/types/tmdbResponse";
import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

type HomeProps = {
  searchParams?: {
    genre?: string;
  };
};

const getData = async (genre: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week"
    }?api_key=${API_KEY}&language=en-US&page=1&include_adult=true`,
    {
      next: {
        revalidate: 10000,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = (await res.json()) as TMDBResponse;

  return data.results;
};

const Home: (props: HomeProps) => Promise<JSX.Element> = async ({
  searchParams,
}): Promise<JSX.Element> => {
  const genre = searchParams?.genre || "fetchTrending";

  const results = await getData(genre);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to IMDB Clone</h1>
      <div className="flex flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
        {results.map((result) => (
          <Result result={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
