export const ifObject = obj => {
  return obj && typeof obj === "object" && Array.isArray(obj) === false;
};

export const ifObjectEmpty = obj => {
  return isObject(obj) && !Object.keys(obj).length;
};

export const updateKeyValueInObject = (obj, key, value) => {
  if (isObject(obj) && key && value) {
    return {
      ...obj,
      key: value
    };
  }
  return obj;
};
