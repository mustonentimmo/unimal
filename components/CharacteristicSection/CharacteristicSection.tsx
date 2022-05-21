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
    <div className="mt-2">
      <dl className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-8">
        {getCharacteristics(characteristics).map((character) => (
          <div key={character.value} className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
              <character.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="text-md ml-3 font-medium">{character.value}</p>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CharacteristicsSection;
