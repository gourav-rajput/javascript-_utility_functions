import { ifArray, ifArrayEmpty } from "./array-handler";
import { ifString, ifStringEmpty } from "./string-handler";
import { ifObject, ifObjectEmpty,  } from "./object-handler";
import { ifNumber, ifNumberEmpty, ifFunction } from "./number-handler";
import { ifFunction } from "./function-handler";

export const ifEmpty = data => {

  if (ifObject(data)) {
    return ifObjectEmpty(data);
  }

  if (ifArray(data)) {
    return ifArrayEmpty(data);
  }

  if (ifString(data)) {
    return ifStringEmpty(data);
  }

  if (ifNumber(data)) {
    return ifNumberEmpty(data);
  }

  if (ifFunction(data)) {
    return ifEmpty(data());
  }

  return true;
};

export const ifExists = data => {
  return (
    data !== undefined 
    && data !== null 
    && data !== ""
  );
};