import data from "./data";

export const getCreators = () => {
  return data;
};

export const getCreator = (id) => {
  const creator = data.find((el) => el.id === id);

  if (creator) {
    return creator;
  }
  return {};
};
