import Head from 'next/head'
import navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <navbar />
      <main>
        <h1 className="title">G u s t a v o T o r r e s</h1>

        <p className="description">
          <code>Compreender fenômenos, sistematizar problemas e planejar soluções.</code>
        </p>
      </main>
    </div>
  )
}
