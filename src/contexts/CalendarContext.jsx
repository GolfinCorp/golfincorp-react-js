import { createContext, useState } from 'react';

export const CalendarContext = createContext({});

const CalendarProvider = ({ children }) => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const data = { selectedDate, setSelectedDate };

  return (
    <CalendarContext.Provider value={data}>{children}</CalendarContext.Provider>
  );
};

export default CalendarProvider;
