export const getFullAPIUrl = (path: string) => {
  return process.env.API_HOST + path;
};
