import Link from 'next/link'

interface shelterCardProps {
  id: number
  name: string
  description: string
  image: string
}

const shelterCard = ({ name, description, image, id }: shelterCardProps) => {
  return (
    <div className="h-fit flex-[1_1_300px] rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 md:max-w-md">
      <div className="h-[25rem] bg-[url('/placeholder.svg')] bg-contain bg-center"></div>
      <div className="flex h-[12rem] flex-col p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 line-clamp-2 dark:text-gray-400">
          {description}
        </p>
        <Link href={`/shelter/${id}`}>
          <button
            type="button"
            className="mt-auto mr-2 mb-2 self-baseline rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            Külasta
          </button>
        </Link>
      </div>
    </div>
  )
}

export default shelterCard
