import 'react-image-gallery/styles/css/image-gallery.css';

import ImageGallery from 'react-image-gallery';

import { getFullAPIUrl } from '@/shared/utilities';

interface ShelterDetailsProps {
  contact: string;
  description: string;
  location: string;
  pictures: string[];
  animalsCount: number;
}

interface ShelterInfo {
  title: string;
  context: { title: string; value: string }[];
}

const ShelterDetails = ({
  contact,
  description,
  location,
  pictures,
  animalsCount,
}: ShelterDetailsProps) => {
  const shelterInfo: ShelterInfo[] = [
    {
      title: 'Kontakt',
      context: [
        { title: 'E-mail', value: contact['email'] || '' },
        { title: 'Telefon', value: contact['telephone'] || '' },
      ],
    },
    {
      title: 'Asukoht',
      context: [
        { title: 'Aadress', value: location['address'] || '' },
        { title: 'Maakond', value: location['county'] || '' },
        { title: 'Postiindeks', value: location['postal_index'] || '' },
      ],
    },
    {
      title: 'Loomade arv',
      context: [
        {
          title: '',
          value: animalsCount,
        },
      ],
    },
  ];

  interface PictureData {
    original: string;
    thumbnail: string;
  }

  const shelterGallery = (pictures: any) => {
    return pictures.map((picture) => {
      const pictureUrl = getFullAPIUrl(picture.attributes.url);
      const pictureData: PictureData = {
        original: '',
        thumbnail: '',
      };
      pictureData.original = pictureUrl;
      pictureData.thumbnail = pictureUrl;

      return pictureData;
    });
  };

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 items-center gap-y-[3rem] gap-x-[3rem] py-24 sm:py-[6rem] lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Üldinfo</h2>
          <p className="mt-4 text-gray-500">{description}</p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {shelterInfo.map((item, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-indigo-600">{item.title}</dt>
                {item.context.length > 0 &&
                  item['context'].map((nested_item: any, index) => (
                    <dd key={index} className="mt-2 text-sm text-gray-500">
                      {nested_item.title && <b>{nested_item.title}:</b>} {nested_item.value}
                    </dd>
                  ))}
              </div>
            ))}
          </dl>
        </div>
        <ImageGallery
          items={
            pictures
              ? shelterGallery(pictures)
              : [{ original: '/placeholder.png', thumbnail: '/placeholder.png' }]
          }
          autoPlay={true}
          onErrorImageLoad="/placeholder.svg"
          showThumbnails={false}
        />
      </div>
    </div>
  );
};

export default ShelterDetails;
