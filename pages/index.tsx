import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joffrey`s portfolio</title>
      </Head>
      <main className='bg-[rgb(36,36,36)] text-white h-screen'>
        {/* header */}
        <Header />

        {/* Hero */}
        <section className=''>
          <Hero/>
        </section>

        {/* About */}

        {/* Experience */}

        {/* skills */}

        {/* projects */}

        {/* Contact Me */}

      </main>
    </>
  )
}
