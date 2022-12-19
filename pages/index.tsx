import Head from 'next/head';
import Header from '../components/Header';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joffrey`s portfolio</title>
      </Head>
      <main className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
        {/* header */}
        <Header />

        {/* Introduction */}
        <section className='snap-start'>
          <Introduction/>
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
