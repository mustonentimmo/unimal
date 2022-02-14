const AnimalCard = () => {

    return <div className="relative rounded-2xl h-[17rem] overflow-hidden drop-shadow-md hover:drop-shadow-lg cursor-pointer">
        <img className="w-full h-full" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        <h1 className="absolute bottom-0 left-4 p-2 font-bold text-white text-2xl">Rudolf</h1>
    </div>
}

export default AnimalCard