import Image from "next/image";


function Batikimg({batiksrc, imgsrc}) {

    return (
        
        
        <div className="mobileImg flex mx-0 my-10 md:mx-10 items-end max-w-sm max-h-md md:max-w-none" style={{"width" : "41rem", "height" : "31rem"}}  >
            <div style={{"width" : "40rem", "height" : "30rem"}} className="bg-black rounded-lg absolute flex hover:cursor-pointer z-0 mt-auto mb-0 ml-0 mr-auto max-w-sm md:max-w-none">


            
            <Image src={batiksrc} layout="fill" objectFit="cover" className="rounded-lg shadow-xl opacity-70">

            </Image>
            
            
            </div>
            
            <div style={{"width" : "40rem", "height" : "30rem"}} className="bg-white rounded-lg relative flex hover:cursor-pointer z-10 ml-auto mr-0 mt-0 mb-auto max-w-sm max-h-md md:max-w-none">
            <Image src={imgsrc} layout="fill" objectFit="cover" className="rounded-lg shadow-xl hover:opacity-70">

            </Image>
            
            </div>
        </div>
            
            


        
        
    )
}

export default Batikimg
