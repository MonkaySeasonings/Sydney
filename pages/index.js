import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Bloggings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="My Bloggings" />
        <hr />
        <p className="description">
          There's a lot to see and do on the web and when I'm note experimenting with scripts, I'm trying to <a href="https://www.freetubetv.net">watch free tv online</a> to find wacky international shows.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
