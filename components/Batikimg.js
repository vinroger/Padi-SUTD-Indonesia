import Image from "next/image";

function Batikimg({batiksrc, imgsrc}) {
    const styling= {
        "background-image" : "url('" + batiksrc + "')",
        "background-position": "-20px 40px",
        "transition": "all 1s ease",
        "-moz-transition": "all 1s ease",
        "-ms-transition": "all 1s ease",
        "-webkit-transition": "all 1s ease",
        "-o-transition": "all 1s ease",
        "background-size":"100%",
        "width" : "33rem", "height" : "25rem" 
        };
    return (
        
        
        <div className="flex justify-start items-end m-10" style={{"width" : "33rem", "height" : "25rem"}} >
            <div style={{"width" : "32rem", "height" : "24rem"}} className="bg-black rounded-lg absolute flex hover:cursor-pointer z-0">


            
            <Image src={batiksrc} layout="fill" objectFit="cover" className="rounded-lg shadow-xl opacity-70">

            </Image>
            
            
            </div>
            
            <div style={{"width" : "32rem", "height" : "24rem"}} className="bg-white rounded-lg relative flex hover:cursor-pointer z-10 ml-auto mr-0 mt-0 mb-auto">
            <Image src={imgsrc} layout="fill" objectFit="cover" className="rounded-lg shadow-xl hover:opacity-70">

            </Image>
            
            </div>
        </div>
            
            


        
        
    )
}

export default Batikimg
