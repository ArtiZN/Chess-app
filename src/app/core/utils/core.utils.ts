export const pluck = (key: string) => {
  return (object: object) => {
    return object[key];
  };
};

export const pluckArray = (arr: Array<object>, key: string) => {
  return arr.map(pluck(key));
};

export const isEmpty = (arr: Array<any>) => {
  return arr.length === 0;
};

export const isIncludes = (arr: Array<string | number | boolean>, e: string | number | boolean) => {
  return arr.includes(e);
};

export const getFirst = (arr: Array<any>) => {
  return arr[0];
};

export const appendToObj = (obj: object, prop: string, value: any) => {
  if (!obj.hasOwnProperty(prop)) {
    obj[prop] = value;
  }
  return obj;
};
