const fillMonth = (days, prevMonth, nextMonth) => {
  /**
   * @params array of days
   * @returns array of days with blank spaces filled with null
   */
  const firstDay = days[0].getDay();
  const finalDay = days[days.length - 1].getDay();
  prevMonth = prevMonth.reverse();
  if (firstDay === 0) {
    let daysToIndex = [];
    for (let i = 0; i < 6; i++) {
      daysToIndex.push(prevMonth[i]);
    }
    days = [...daysToIndex, ...days];
  } else {
    let daysToIndex = [];
    for (let i = 0; i < firstDay - 1; i++) {
      daysToIndex.push(prevMonth[i]);
    }
    days = [...daysToIndex, ...days];
  }
  if (finalDay === 0) {
    return days;
  } else {
    let daysToIndex = [];
    for (let i = 0; i < 7 - finalDay; i++) {
      daysToIndex.push(nextMonth[i]);
    }
    days = [...days, ...daysToIndex];
  }
  return days;
};

const getDatesOfMonth = (year, month, days) => {
  const daysOfMonth = [];
  const date = new Date(year, month, days);
  while (date.getMonth() === month) {
    daysOfMonth.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return daysOfMonth;
};

export const getDays = (month, year) => {
  /**
   * @params
   *    [month:int] with current month
   *    [year:int] with current year
   * @returns an array with all days in current month
   */
  const date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  const prevMonth = getDatesOfMonth(year, month - 1, 1);
  const nextMonth = getDatesOfMonth(year, month + 1, 1);

  days = fillMonth(days, prevMonth, nextMonth);
  return days;
};
