import { createContext, useState } from 'react';

export const CalendarContext = createContext({});

const CalendarProvider = ({ children }) => {
  const currentDate = new Date(new Date().setHours(0, 0, 0, 0));
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const data = { selectedDate, setSelectedDate };

  return (
    <CalendarContext.Provider value={data}>{children}</CalendarContext.Provider>
  );
};

export default CalendarProvider;
