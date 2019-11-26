
export const ifNumber = data => {
  return data === 0 || typeof data === "number"
};

export const ifNumberEmpty = data => {
  return data;
};