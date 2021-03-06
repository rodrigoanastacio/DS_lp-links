import Head from 'next/head';

import Hero from '../components/Hero';
import Card from '../components/Card';
import MadeBy from '../components/MadeBy';

export default function Home() {
  return (
    <>
      <Head>
        <title>Links | Dayane Silva</title>
        <meta
          name="description"
          content="Aqui você encontra links sobre meu trabalho, conteúdos e muito mais."
        />
      </Head>
      <Hero>
        <Card />
        <MadeBy />
      </Hero>
    </>
  );
}
