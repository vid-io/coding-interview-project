import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <>
      <Head>
        <title>Keywords</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={`${inter.className} m-6`}>
        <h1 className="font-bold text-lg text-gray-900 pb-9">
          List of keywords
        </h1>

        <p>Implement new features here</p>
      </main>
    </>
  )
}
