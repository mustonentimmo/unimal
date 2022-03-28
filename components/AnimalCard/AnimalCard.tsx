const AnimalCard = () => {
  return (
    <div className="relative h-[17rem] cursor-pointer overflow-hidden rounded-2xl drop-shadow-md hover:drop-shadow-lg">
      <img
        className="h-full w-full"
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
        alt=""
      />
      <h1 className="absolute bottom-0 left-4 p-2 text-2xl font-bold text-white">Rudolf</h1>
    </div>
  );
};

export default AnimalCard;
