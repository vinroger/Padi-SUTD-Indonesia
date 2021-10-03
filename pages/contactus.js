import Batikimg from "../components/Batikimg";
import Title from "../components/Title";
import Titleimg from "../components/Titleimg";
import Layout from './../components/Layout';
import Content from './../components/Content';
import ContentRev from './../components/ContentRev';
import React, { useState } from 'react';
import Link from 'next/link';
import { EmojiHappyIcon } from '@heroicons/react/solid';




function events() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
            })
        };
    
    
    return (
        <Layout>
            <Titleimg imgsrc="./img/event002.jpg">
                <h1 className= "font-bold text-4xl m-2" >Contact Us!</h1>
                <h4 className="text-lg">Check our social media out! Drop us an email!</h4>
            </Titleimg>
            <div className="flex flex-col">
                <div className="m-10 p-10 mb-0">
                    <div className="flex flex-col items-center">
                        <div className="text-center text-4xl font-bold m-5">
                        Follow Us
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-50 mx-auto">
                    <Link href="https://www.instagram.com/padigraphy/" target="_blank">
                        <a className="hover:opacity-50 flex items-center">
                            <img src="./img/insta.png" className="mr-5 my-5" width="50rem" />
                            <h4 className="text-xl font-semibold">padigraphy</h4>
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/sutdindonesia/">
                        <a className="hover:opacity-50 flex items-center">
                            <img src="./img/fb.png" className="mr-5 my-5 " width="50rem" />
                            <h4 className="text-xl font-semibold">PADI : SUTD Indonesia</h4>
                        </a>
                    </Link>
                </div>
                
            </div>
            <div className="my-5 py-5 justify-center">
                <div className="m-10 p-10 mb-0">
                    <div className="flex flex-col items-center">
                        <div className="text-center text-4xl font-bold m-5">
                        Got a question ?
                        </div>
        
                    </div>
                </div>
                <div className="flex flex-col space-y-10 w-1/2 justify-center mx-auto mb-5 pb-5">
                    <input required type="text" name="name" className="border-2 rounded-lg h-10 p-2" placeholder="Name" onChange={(e)=> {setName(e.target.value);}} />
                    <input required type="text" name="email" className="border-2 rounded-lg h-10 p-2" placeholder="Email" onChange={(e)=> {setEmail(e.target.value);}} />
                    <textarea required type="text" name="message" className="border-2 rounded-lg h-32 p-2" placeholder="Message" onChange={(e)=> {setMessage(e.target.value);}} />
                    <button type='submit' className="rounded-lg h-10 w-32 p-2 content-center bg-red-900 text-white" onClick={(e)=>{handleSubmit(e)}}>Submit</button>
                    <div className= {submitted ? "flex-row items-center" : "hidden flex-row items-center"}>
                        <EmojiHappyIcon className="h-8 inline w-8 mr-5 pb-1"></EmojiHappyIcon>
                        <h4 className="inline text-xl text-bold">Successfully Submitted! Thanks for your feedback!</h4>
                    </div>
                </div>
                
                <div>

                </div>
                
            </div>
            
        </Layout>
    )
}

export default events
