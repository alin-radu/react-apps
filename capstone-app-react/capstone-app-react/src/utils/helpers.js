import { TIME_OPTIONS } from 'utils/constants';

export const getFormatedDate = (obj) => {
  if (!(obj instanceof Date)) {
    return;
  }

  const date = obj
    .toLocaleString('sv', {
      timeZone: 'Europe/Bucharest',
    })
    .slice(0, 10);

  return date;
};

const currentDate = getFormatedDate(new Date());

export const defaultAvailableTimes = { [currentDate]: TIME_OPTIONS };
