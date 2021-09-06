import Image from 'next/image';

function HomeContent() {
    return (<div>

    
        <div className="m-10 p-10">
            <div className="flex flex-col items-center">
                <div className="text-center text-4xl font-bold m-5">
                    Not only a Community, but a Family.
                </div>
                <div className="text-center max-w-xl text-lg ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
        
            </div>
        </div>
        <div className="flex flex-col items-center w-screen my-10 pb-10">
            <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row justify-center items-center w-screen py-10">
                <div style={{"width" : "40rem", "height" : "30rem"}} className="relative flex items-center mx-10 hover:opacity-80 hover:cursor-pointer" >
                    <Image src="/img/event002.jpg" layout="fill" objectFit="cover"></Image>
                </div>
                <div className="block items-center mx-10">
                    <div className="text-center md:text-left text-4xl  font-bold">
                        Our Vision
                    </div>
                    <br />
                    <div className="text-center md:text-left text-lg max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>

            </div>
            <div className="flex flex-col-reverse space-y-10 space-y-reverse md:space-y-0 md:flex-row justify-center items-center w-screen py-10">
                <div className="block items-center mx-10">
                    <div className="text-center md:text-left text-4xl  font-bold">
                        Our Mission
                    </div>
                    <br />
                    <div className="text-center md:text-left text-lg max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
                <div style={{"width" : "40rem", "height" : "30rem"}} className="relative flex items-center mx-10 hover:opacity-80 hover:cursor-pointer" >
                    <Image src="/img/event003.jpg" layout="fill" objectFit="cover"></Image>
                </div>
                

            </div>
        </div>
    </div>
    )
}

export default HomeContent
