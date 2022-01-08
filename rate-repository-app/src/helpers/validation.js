
import { isValid, format, parseISO } from 'date-fns'



export const formProperNumber = (number) => {
  if (number >= 1000) {
    const divByThousand = number / 1000;
    return `${divByThousand.toFixed(1)}k`;
  }
  return number;
};


export const getOrder = (value) => {
  switch (value) {
    case 'latest':
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
    case 'highest':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
    case 'lowest':
      return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
    default:
      return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
  }
};