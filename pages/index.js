import Head from 'next/head'
import Header from '../components/Header/header'
import Content from '../components/Content/content'

export default function Home() {
  return (
      <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&family=Pacifico&display=swap" 
          rel="stylesheet"
          key="google-font-nunito"/>
        <title>Sweet Chef</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    

      <Header/>    
      <Content />      

      </>
  )
}