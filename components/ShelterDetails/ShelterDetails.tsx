import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

interface ShelterDetailsProps {
  shelterContact: string
  shelterDescription: string
  shelterAddress: string
  animalsCount: number
}

const ShelterDetails = ({
  shelterContact,
  shelterDescription,
  shelterAddress,
  animalsCount,
}: ShelterDetailsProps) => {
  const shelterInfo = [
    { title: 'Kontakt', context: shelterContact['telephone'] },
    { title: 'Aadress', context: shelterAddress },
    { title: 'Loomade arv', context: animalsCount },
  ]

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 items-center gap-y-[3rem] gap-x-[3rem] py-24 sm:py-[6rem] lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Üldinfo
          </h2>
          <p className="mt-4 text-gray-500">{shelterDescription}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {shelterInfo.map((item) => (
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-blue-700">{item.title}</dt>
                <dd className="mt-2 text-sm text-gray-500">{item.context}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/*<ImageGallery*/}
        {/*  additionalClass="mb-auto"*/}
        {/*  items={''}*/}
        {/*  showPlayButton={false}*/}
        {/*/>*/}
      </div>
    </div>
  )
}

export default ShelterDetails
