import { RefObject } from "react";
import { PhoneSets } from "../types";

export const switchInput = (
  phoneRef: RefObject<HTMLInputElement>,
  refArr: RefObject<HTMLInputElement>[]
) => {
  if (
    phoneRef.current?.value.length === phoneRef.current?.maxLength &&
    refArr.indexOf(phoneRef) < refArr.length - 1
  ) {
    refArr[refArr.indexOf(phoneRef) + 1].current?.focus();
  } else if (
    phoneRef.current?.value.length === 0 &&
    refArr.indexOf(phoneRef) > 0
  ) {
    refArr[refArr.indexOf(phoneRef) - 1].current?.focus();
  }
};

export const setArray = (phoneArr: string[], value: string, index: number) => {
  const phoneSet = [...phoneArr];
  let set = [...phoneSet[index]];
  set = [value];
  phoneSet[index] = set.join("");
  return phoneSet;
};

export const makePlaceholder = (len: number): string => {
  let placeHolder = "";
  for (let i = 0; i < len; i++) {
    placeHolder += "5";
  }
  return placeHolder;
};

export const getRefObjArr = (
  refArr: Array<RefObject<HTMLInputElement>>,
  lengArr: Array<number>
): PhoneSets[] => {
  const refObjArr: PhoneSets[] = [];
  for (const input in refArr) {
    refObjArr.push({
      input: refArr[input],
      length: lengArr[input],
      key: `phone-input-${Number(input) + 1}`,
    });
  }
  return refObjArr;
};
