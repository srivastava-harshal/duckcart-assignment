export const saveOrUpdate = (key, value = {}) => {
  try {
    if (key === null) return;
    let donations = {};
    const data = window.localStorage.getItem(key, value);
    if (data !== null) {
      donations = JSON.parse(data);
    }
    donations = {
      ...donations,
      [key]: [...(donations[key] || []), value],
    };
    window.localStorage.setItem(key, JSON.stringify(donations));
  } catch (e) {
    console.log(e);
  }
};

export const get = () => {
  const data = { ...localStorage };
  const arr = [];
  Object.entries(data).forEach(([key, value]) => {
    const parsedValue = JSON.parse(value);
    parsedValue[key].forEach((obj) => {
      arr.push({
        creator: key,
        ...obj,
      });
    });
  });

  return arr;
};
