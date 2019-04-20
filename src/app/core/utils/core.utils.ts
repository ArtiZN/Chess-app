export const pluck = (key: string) => {
  return (object: Object) => {
    return object[key];
  };
};

export const getOne = (arr: Array<Object>, key: string) => {
  return arr.map(pluck(key));
};

export const isEmpty = (arr: Array<any>) => {
  return arr.length === 0;
};

export const isIncludes = (arr: Array<string | number | boolean>, e: string | number | boolean) => {
  return arr.includes(e);
};
