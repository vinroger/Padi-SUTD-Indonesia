function Titleimg({children}) {
    return (
        <div>
            
            <div className="bg-hero bg-no-repeat bg-center bg-cover w-screen h-full">
            <div className= "bg-black bg-opacity-70 text-white" style={{"width" : "100vw", "height" : "40vw"}} >
                <div className="flex flex-col text-center align-center justify-center w-full h-full">
                    {children}
                </div>
                </div>
            
                
            </div>
        </div>
    )
}

export default Titleimg
