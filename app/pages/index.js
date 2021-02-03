import Head from 'next/head'
import s from '../styles/Home.module.css'
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const assetManifest = await fs.readFileSync(path.join(process.cwd(), "../widget/build/asset-manifest.json"),{encoding:'utf8', flag:'r'})

  return {
    props: {
      assetManifest: JSON.parse(assetManifest)
    }
  }
}

export default function Home({ assetManifest }) {

  return (
    <div className={s.container}>
      <Head>
        <title>next-microfrontneds</title>
        <link rel="icon" href="/favicon.ico" />
        <script link="preload" src={`https://next-microfrontend-widget.vercel.app${assetManifest.files["main.js"]}`} />
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
