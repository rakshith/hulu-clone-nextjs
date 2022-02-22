import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      <Results results={results} />
    </div>
  );
}

/**
 * This will be executed as part of server side rendering
 * @param context will be passed from server to fetch details about the current rendering URL
 */

export async function getServerSideProps(context) {
  console.log(requests);
  const genre = context.query.genre;
  console.log(genre);
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  console.log(request);
  return {
    props: {
      results: request.results,
    },
  };
}
