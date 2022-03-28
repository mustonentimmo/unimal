// @ts-nocheck
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ShelterDetailsProps {
  shelterContact: string;
  shelterDescription: string;
  shelterLocation: string;
  shelterPictures: string[];
  animalsCount: number;
}

const ShelterDetails = ({
  shelterContact,
  shelterDescription,
  shelterLocation,
  shelterPictures,
  animalsCount
}: ShelterDetailsProps) => {
  const shelterInfo = [
    {
      title: 'Kontakt',
      context: [
        { title: 'E-mail', value: shelterContact['email'] },
        { title: 'Telefon', value: shelterContact['telephone'] }
      ]
    },
    {
      title: 'Asukoht',
      context: [
        { title: 'Aadress', value: shelterLocation['address'] },
        { title: 'Maakond', value: shelterLocation['county'] },
        { title: 'Postiindeks', value: shelterLocation['postal_index'] }
      ]
    },
    { title: 'Loomade arv', context: animalsCount }
  ];

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 items-center gap-y-[3rem] gap-x-[3rem] py-24 sm:py-[6rem] lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Üldinfo</h2>
          <p className="mt-4 text-gray-500">{shelterDescription}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {shelterInfo.map((item) => (
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-blue-700">{item.title}</dt>
                {item.context.length > 1 ? (
                  item['context'].map((nested_item: any) => (
                    <dd className="mt-2 text-sm text-gray-500">
                      <b>{nested_item.title}</b>: {nested_item.value}
                    </dd>
                  ))
                ) : (
                  <dd className="mt-2 text-sm text-gray-500">{item.context}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
        <ImageGallery additionalClass="mb-auto" items={shelterPictures} showPlayButton={false} />
      </div>
    </div>
  );
};

export default ShelterDetails;
