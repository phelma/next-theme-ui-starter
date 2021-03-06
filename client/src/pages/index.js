/** @jsxImportSource theme-ui */
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main sx={{mx: 'auto', maxWidth: 1200, px: 2}}>
        <h1 sx={{fontWeight: 800}}>Here we go!</h1>
        <Link href="/login">Login</Link>
      </main>
    </div>
  )
}
