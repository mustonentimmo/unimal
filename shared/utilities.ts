export const getFullAPIUrl = (path: string) => {
  return process.env.API_HOST + path;
};

export const getShelterDataByID = (shelters: any, id: string | string[] | undefined) => {
  return (
    shelters.length > 0 &&
    shelters.filter((shelter: any) => {
      return shelter.id == id;
    })['0'].attributes
  );
};

export const getAnimalDataByID = (animals: any, id: string | string[] | undefined) => {
  return (
    animals.length > 0 &&
    animals.filter((animal: any) => {
      return animal.id == id;
    })
  );
};

export const getGalleryData = (pictures: any) => {
  if (pictures === null || pictures.length === 0) {
    return ['/placeholder.png'];
  }
  return pictures.map((picture) => {
    return getFullAPIUrl(picture.attributes.url);
  });
};

export const getAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  const year = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  const ageInMonths = year * 12 + month;

  if (ageInMonths <= 24) {
    return 'juunior';
  }

  if (ageInMonths > 24 && ageInMonths < 120) {
    return 'täiskasvanu';
  }

  if (ageInMonths >= 120) {
    return 'seenior';
  }
};
