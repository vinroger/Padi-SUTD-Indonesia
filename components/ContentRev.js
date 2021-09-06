import Batikimg from './Batikimg';

function Content({title, desc, imgsrc}) {

    return (
        <div>
            <div className="flex flex-col items-center w-screen my-10 pb-10">
                <div className="flex flex-col-reverse space-y-10 space-y-reverse md:space-y-0 md:flex-row justify-center items-center w-screen py-10">
                    <div className="block items-center mx-10">
                        <div className="text-center md:text-left text-4xl  font-bold">
                            {title}
                        </div>
                        <br />
                        <div className="text-center md:text-left text-lg max-w-xl">
                            {desc}
                        </div>
                    </div>
                    
                    <Batikimg imgsrc={imgsrc} batiksrc="/img/batik2.jpg"></Batikimg>
                            
                </div>
            </div>
            
        </div>
    )
}

export default Content
