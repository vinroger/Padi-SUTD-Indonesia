import Head from 'next/head'
import HomeContent from '../components/HomeContent'
import Layout from '../components/Layout'
import Titleimg from '../components/Titleimg'
import MyApp from './_app';

import People from './../components/People';

export default function Committee() {
    return (
    
    <Layout>
    <div>
            
        <div className="bg-people bg-no-repeat bg-center bg-cover w-screen h-full">
            <div className= "bg-black bg-opacity-70 text-white" style={{"width" : "100vw", "height" : "40vw"}} >
                <div className="flex flex-col text-center align-center justify-center w-full h-full">
                    <h1 className= "font-bold text-4xl m-2" >The Committee</h1>
                    <h4 className="text-lg">“We are obviously strong. Don't ask.”</h4>
                </div>
                </div>
            
                
        </div>
        <div>

        </div>
    </div>
    <div className="justify-center my-10 py-10">
        <div className="m-10 p-10">
            <div className="flex flex-col items-center">
                <div className="text-center text-4xl font-bold m-5">
                    Executive Members of PADI
                </div>
        
            </div>
        </div>
        <div className="flex flex-col space-y-10 md:space-y-0  md:flex-row flex-grow justify-evenly my-10 py-10">
            <People url="/img/moktar2.jpg" name="Edward Marco Moktar" description="President of PADI"></People>
            <People url="/img/ferry2.jpg" name="Ferry Chandra" description="Vice President of PADI"></People>
        </div>
        <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row flex-grow justify-evenly my-10 py-10">
            <People url="/img/erick2.jpg" name="Erick Chandra" description="Treasurer"></People>
            <People url="/img/jdl2.jpg" name="Jonathan Davinius Layardi" description="Secretary"></People>
            <People url="/img/nathan2.jpg" name="Nathan Chang" description="PR/IT Director"></People>
        </div>
        <br />
        <br /> 
        
        
        
    </div>
        
    
    
    </Layout>
    )
}
