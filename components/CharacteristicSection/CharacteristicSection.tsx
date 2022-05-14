import {
  AnnotationIcon,
  ChatAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

interface CharacteristicsSectionProps {
  [key: string]: boolean;
}

const CharacteristicsSection = ({ characteristics }: CharacteristicsSectionProps) => {
  const characteristicsData = {
    manguhimuline: { value: 'Mänguhimuline', icon: LightningBoltIcon },
    kartlik: { value: 'Kartlik', icon: ScaleIcon },
    rahulik: { value: 'Rahulik', icon: AnnotationIcon },
    sotsiaalne: { value: 'Sotsiaalne', icon: ChatAltIcon },
    tagasihoidlik: { value: 'Tagasihoidlik', icon: AnnotationIcon },
  };

  const getCharacteristics = (data) => {
    let characteristics: any = [];

    for (const [key, value] of Object.entries(data)) {
      if (key !== 'id' && value === true) {
        characteristics = [...characteristics, characteristicsData[key]];
      }
    }

    return characteristics;
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Iseloomujooned
          </h2>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {getCharacteristics(characteristics).map((character) => (
              <div key={character.value} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <character.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {character.value}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsSection;
