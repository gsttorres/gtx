import Head from 'next/head'
import navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gustavo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <navbar />
      <main>
        <h1 className="title">GustavoTorres</h1>

        <p className="description">
          <code>Compreender fenômenos, sistematizar problemas e planejar soluções.</code>
        </p>
      </main>
    </div>
  )
}
