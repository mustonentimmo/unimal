import Image from 'next/image';
import Link from 'next/link';

interface AnimalCardProps {
  name: string;
  profilePicture: string;
}

const AnimalCard = ({ name, profilePicture, shelterID, animalID }: AnimalCardProps) => {
  return (
    <Link href={`/shelter/${shelterID}/animal/${animalID}`}>
      <div className="relative h-[17rem] cursor-pointer overflow-hidden rounded-2xl drop-shadow-md hover:drop-shadow-lg">
        <h1 className="absolute bottom-0 left-4 z-[1] p-2 text-2xl font-bold text-white drop-shadow-md">
          {name}
        </h1>
        <Image objectFit="cover" layout="fill" src={profilePicture} />
      </div>
    </Link>
  );
};

export default AnimalCard;
