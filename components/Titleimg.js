function Titleimg({children, imgsrc}) {

    const styling= {
    "background-image" : "url('" + imgsrc + "')",
    "transition": "all 1s ease",
    "-moz-transition": "all 1s ease",
    "-ms-transition": "all 1s ease",
    "-webkit-transition": "all 1s ease",
    "-o-transition": "all 1s ease",
    };
    return (
        <div>
            
            <div id="bg-hero" className="bg-no-repeat bg-center bg-cover w-screen h-full" style={styling}>
            <div className= "bg-black bg-opacity-70 text-white" style={{"width" : "100vw", "height" : "45vw"}} >
                <div className="flex flex-col text-center align-center justify-center w-full h-full">
                    {children}
                </div>
                </div>
            
                
            </div>
        </div>
    )
}

export default Titleimg
