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
