import { ifExists } from "./global-handler";

export const ifString = data => {
  return (
    data === "" 
    || typeof data === "string"
  );
};

export const ifStringEmpty = data => {
  return !ifExists(data);
};