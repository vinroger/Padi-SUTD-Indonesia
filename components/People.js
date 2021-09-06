import Image from "next/image";

function People({url, name, description}) {
    return (
        <div className="flex flex-col justify-center">
            <div style={{"width" : "20rem", "height" : "20rem"}} className="relative flex items-center mx-auto hover:opacity-80 hover:cursor-pointer m-3" >
                <Image src={url} layout="fill" objectFit="cover" className="rounded-lg"></Image>
            </div>
            <div className="text-center font-bold text-2xl">
                {name}
            </div>
            <div className="text-center font-semi-bold text-xl">
                {description}
            </div>
        </div>
        
    )
}

export default People
