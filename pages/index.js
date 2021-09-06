import Head from 'next/head'
import HomeContent from '../components/HomeContent'
import Layout from '../components/Layout'
import Titleimg from '../components/Titleimg'

export default function Home() {

  return (
    
    <Layout>
    <Titleimg imgsrc="./img/event001.jpg"> 
        <h1 className= "font-bold text-4xl m-2" >Perhimpunan Mahasiswa SUTD Indonesia</h1>
        <h4 className="text-lg">“Semakin berisi semakin merunduk.”</h4>
    </Titleimg>
    <HomeContent>
    </HomeContent>
    
    </Layout>
  )
}
