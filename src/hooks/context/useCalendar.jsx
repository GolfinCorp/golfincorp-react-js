import { useContext } from 'react';
import { CalendarContext } from '@/contexts';
const useCalendar = () => {
  return { ...useContext(CalendarContext) };
};

export default useCalendar;
