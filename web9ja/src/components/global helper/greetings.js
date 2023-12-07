export const getDailyTimeSegment = () => {
  let date = new Date();
  let hours = date.getHours();

  if (hours >= 0 && hours <= 11) {
    return `Good morning`;
  } else if (hours >= 12 && hours <= 16) {
    return `Good afternoon`;
  } else {
    return `Good evening`;
  }
};
