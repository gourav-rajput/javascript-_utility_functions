import { ifExists } from "./global-handler";

export const ifArray = data => {
  return (data 
    && Array.isArray(data) 
    && data instanceof Array
  );
};

export const ifArrayEmpty = data => {
  if (ifExists(data)) {
    return !(!!data.length);
  }
  return false;
};