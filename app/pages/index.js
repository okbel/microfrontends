import Head from 'next/head'
import s from '../styles/Home.module.css'
import assetManifest from "../../widget/build/asset-manifest"

export default function Home() {
  console.log(assetManifest)
  return (
    <div className={s.container}>
      <Head>
        <title>next-microfrontneds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <div className={s.content}>
          <div className={s.local}>
            Local
          </div>
          <div className={s.row}>
            <div className={s.external}></div>
            <div className={s.external}></div>
            <div className={s.external}></div>
          </div>
        </div>
      </main>
    </div>
  )
}
