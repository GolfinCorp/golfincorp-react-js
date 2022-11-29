const createClamp = (min, max) => {
  return (num) => {
    if (num < min) return max;
    if (num > max) return min;
    return num;
  };
};

const fillMonth = (days, prevMonth, nextMonth) => {
  /**
   * @params array of days
   * @returns array of days with blank spaces filled with null
   */
  const firstDay = days[0].getDay();
  const finalDay = days[days.length - 1].getDay();

  prevMonth = prevMonth.reverse();

  const startDates = [];
  const clamp = createClamp(0, 6);
  for (let i = clamp(firstDay - 1) - 1; i >= 0; i--) {
    startDates.push(prevMonth[i]);
  }
  days = [...startDates, ...days];

  const endDates = [];
  for (let i = 0; i < clamp(7 - finalDay); i++) {
    endDates.push(nextMonth[i]);
  }
  days = [...days, ...endDates];
  return days;
};

const getDatesOfMonth = (date) => {
  const daysOfMonth = [];
  const month = date.getMonth();
  while (date.getMonth() === month) {
    daysOfMonth.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return daysOfMonth;
};

const addMonths = (date, numOfMonths) => {
  const dateCopy = new Date(date.getTime());

  dateCopy.setMonth(dateCopy.getMonth() + numOfMonths);

  return dateCopy;
};

export const getDays = (year, month) => {
  /**
   * @params
   *    [year:int] with current year
   *    [month:int] with current month
   * @returns an array with all days in current month
   */
  const date = new Date(year, month, 1);
  const prevMonth = new Date(addMonths(date, -1));
  const nextMonth = new Date(addMonths(date, 1));
  let days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  const prevDates = getDatesOfMonth(prevMonth);
  const nextDates = getDatesOfMonth(nextMonth);

  days = fillMonth(days, prevDates, nextDates);

  return days;
};
