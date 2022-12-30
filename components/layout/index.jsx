import Head from "next/head"

export default function Layout({ children }) {
  return <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="width=device-width, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {children}
  </>
}
