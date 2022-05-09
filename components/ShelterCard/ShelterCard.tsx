import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaDog } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

interface shelterCardProps {
  id: number;
  name: string;
  location: string;
  description: string;
  animalsCount: number;
  image: string;
}

const shelterCard = ({
  name,
  description,
  image,
  id,
  animalsCount,
  location,
}: shelterCardProps) => {
  return (
    <Link href={`/shelter/${id}`}>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-fit cursor-pointer rounded-lg bg-white shadow-lg"
      >
        <div className="h-[20rem] rounded-lg bg-[url('/placeholder.svg')] bg-contain bg-center"></div>
        <div className="flex h-[13rem] flex-col p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
          <div className="flex">
            <div className="inline-block flex justify-center self-start rounded bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 align-middle text-sm text-white">
              <FaDog size="1.25em" />
              <span className="ml-1 font-medium capitalize">{animalsCount}</span>
            </div>
            <div className="ml-1 inline-block flex justify-center self-start rounded bg-gradient-to-br from-rose-400 to-orange-300 px-4 py-2 align-middle text-sm text-white">
              <MdLocationOn size="1.25em" />
              <span className="ml-1 font-medium capitalize">{location.county}</span>
            </div>
          </div>
          <p className="mt-4 font-normal text-gray-700 line-clamp-4">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default shelterCard;
