import Head from 'next/head'
import s from '../styles/Home.module.css'
import { useEffect, useRef } from 'react';

export default function Home() {
  const widgetRef = useRef(null);
  useEffect(() => {
    window.renderWidget(widgetRef.current)
  },[]);
  
  return (
    <div className={s.container}>
      <Head>
        <title>next-microfrontend</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://next-microfrontend-widget.vercel.app/static/css/main.css" />
        <script link="preload" src="https://next-microfrontend-widget.vercel.app/static/js/main.js" />
      </Head>
      <main className={s.main}>
        <div className={s.content}>
          <div className={s.local}>
            Local
          </div>
          <div className={s.row}>
            <div className={s.external} />
            <div className={s.external} />
            <div className={s.external} ref={widgetRef}/>
          </div>
        </div>
      </main>
    </div>
  )
}
