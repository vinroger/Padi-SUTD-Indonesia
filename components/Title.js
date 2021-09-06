function Title({title, description}) {
    return (
        <div>
            <div className="m-10 p-10">
                    <div className="flex flex-col items-center">
                        <div className="text-center text-4xl font-bold m-5">
                            {title}
                        </div>
                        <div className="text-center max-w-xl text-lg ">
                            {description}
                        </div>
                
                    </div>
                </div>
        </div>
    )
}

export default Title
