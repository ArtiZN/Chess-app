export const pluck = key => object => object[key];
export const getOne = (arr, username) => {
  return arr.map(pluck(username));
};

export const isEmpty = arr => arr.length === 0;
export const isIncludes = (arr, e) => arr.includes(e);
