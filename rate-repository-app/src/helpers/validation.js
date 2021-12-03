

export const formProperNumber = (number) => {
  if (number >= 1000) {
    const divByThousand = number / 1000;
    return `${divByThousand.toFixed(1)}k`;
  }
  return number;
};
