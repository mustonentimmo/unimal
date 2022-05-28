interface CharacteristicsSectionProps {
  [key: string]: boolean;
}

const CharacteristicsSection = ({ characteristics }: CharacteristicsSectionProps) => {
  const characteristicsData = {
    manguhimuline: { value: 'Mänguhimuline', icon: '🥎' },
    kartlik: { value: 'Kartlik', icon: '😱' },
    rahulik: { value: 'Rahulik', icon: '💤' },
    sotsiaalne: { value: 'Sotsiaalne', icon: '💬' },
    tagasihoidlik: { value: 'Tagasihoidlik', icon: '😶' },
  };

  const getCharacteristics = (data) => {
    let characteristics: any = [];

    if (data === null || data.length === 0) {
      return [];
    }

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
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
              <span className="text-xl">{character.icon}</span>
            </div>
            <p className="text-md ml-3 font-medium">{character.value}</p>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CharacteristicsSection;
