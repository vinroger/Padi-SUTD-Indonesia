import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import {MenuIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';


import bg1 from '../public/img/event001.jpg'



export default function Layout({children}) {
    let [clicked,setClicked] = useState(false);
    return <div>
    <Head>
        <title>PADI SUTD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>                                                
        <nav style={{"backgroundColor":"#5E1212"}}>
            <div className="max-w-full pt-4 pb-4 mx-auto px-4 block md:flex"> 
                
                <div className = "flex md:ml-10 pl-5 justify-between pr-5 items-center"> 
                    {/* logo padi */}   
                    <Link href="/">
                    <a className = "hover:opacity-50 flex items-center"> 
                        <img src="./img/logo-large.png" width="100rem"/>
                    </a>

                    </Link>
                    {/* logo burger */}
                    <div className="md:hidden" >
                    <MenuIcon className="h-8 text-white" onClick={()=> setClicked(!clicked)}></MenuIcon>

                    </div>
                </div>
                <div className="hidden md:flex ml-auto mr-10 pr-5 items-center space-x-10 text-white"> 
                    <Link href="/" ><a className="font-semi-bold text-xl hover:opacity-50 hover:animate-bounce">Home</a></Link>
                    <Link href="/events" ><a className="font-semi-bold text-xl hover:opacity-50 hover:animate-bounce">Events</a></Link>
                    <Link href="/committee" ><a className="font-semi-bold text-xl hover:opacity-50 hover:animate-bounce">Committee</a></Link>
                    <Link href="/" ><a className="font-semi-bold text-xl hover:opacity-50 hover:animate-bounce">Contact Us</a></Link>
                
                </div>
                
                <div className={clicked? "" : "hidden"}>
                    <div className="md:hidden text-white pl-5 ml-5 space-y-5 mt-8"> 
                        <Link href="/" ><a className="font-semi-bold text-xl block hover:opacity-50">Home</a></Link>
                        <Link href="/events" ><a className="font-semi-bold text-xl block hover:opacity-50">Events</a></Link>
                        <Link href="/committee" ><a className="font-semi-bold text-xl block hover:opacity-50">Committee</a></Link>
                        <Link href="/" ><a className="font-semi-bold text-xl block hover:opacity-50">Contact Us</a></Link>
                    </div>
                </div>
                

            
            
            </div>
        
        
        </nav>
    </header>
        

    
    <div>{children}</div>
    <footer>
        <div className="w-full h-auto p-10" style={{"backgroundColor":"#5E1212"}}>
            <div className="flex flex-col items-center md:flex-row md:space-y-5 justify-around pl-10 pr-10">
                <div className="relative w-48 h-36 flex hover:opacity-50 hover:cursor-pointer">
                    <Link href="/">
                        <Image src="/img/logo-large.png" layout="fill" objectFit="contain"></Image>
                    </Link>

                    
                </div>
                <div className="text-white justify-evenly space-x-10 flex flex-grow max-w-lg">
                    <Link href="/" ><a className="font-semi-bold text-xl hover:opacity-50">Home</a></Link>
                    <Link href="/events" ><a className="font-semi-bold text-xl hover:opacity-50">Events</a></Link>
                    <Link href="/committee" ><a className="font-semi-bold text-xl hover:opacity-50">Committee</a></Link>
                    <Link href="/" ><a className="font-semi-bold text-xl hover:opacity-50">Contact Us</a></Link>
                </div>
            </div>
            <div className="text-center mt-5 pt-10">
                <div className="text-white text-xs opacity-50">
                    ©2021 Perhimpunan Mahasiswa SUTD Indonesia. All right reserved.
                </div>
            </div>

        </div>
    </footer>

    </div>
    
}