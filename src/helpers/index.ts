export const getYear = (date: string): string => {
  return date;
};

export const dateFormat = (time: number) => {
  // switch(time) {
  //     case time!:
  //     break;
  //     default:
  // }

  return time;
};

export const getWords = (amount: number, str: string): string => {
  const strArray: string[] = str.split(" ");
  const newDescription: string = strArray.splice(0, amount).join(" ");

  return newDescription;
};
