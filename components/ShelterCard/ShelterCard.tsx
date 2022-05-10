import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDog } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

interface shelterCardProps {
  id: number;
  name: string;
  county: string;
  description: string;
  animalsCount: number;
  logo: string;
}

const shelterCard = ({ name, description, logo, id, animalsCount, county }: shelterCardProps) => {
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
        <div className="flex h-[20rem] min-w-full items-center justify-center overflow-hidden rounded-lg">
          <Image src={logo} height="200px" width="200px" />
        </div>
        <div className="flex h-[13rem] flex-col p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
          <div className="flex">
            <div className="inline-block flex justify-center self-start rounded bg-gradient-to-r from-sky-400 to-cyan-300 px-4 py-2 align-middle text-sm text-white">
              <FaDog size="1.25em" />
              <span className="ml-1 font-medium capitalize">{animalsCount}</span>
            </div>
            <div className="ml-1 inline-block flex justify-center self-start rounded bg-gradient-to-br from-rose-400 to-orange-300 px-4 py-2 align-middle text-sm text-white">
              <MdLocationOn size="1.25em" />
              <span className="ml-1 font-medium capitalize">{county}</span>
            </div>
          </div>
          <p className="mt-4 font-normal text-gray-700 line-clamp-4">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default shelterCard;
