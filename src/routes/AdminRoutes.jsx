import { Route } from 'react-router-dom';
import NoMatch from '@/views/NoMatch';
import Calendar from '@/views/Admin/Calendar';
import DashboardLayout from '@/components/organisms/dashboard/Dashboard';
import Members from '@/views/Admin/Members';

const AdminRoutes = () => {
  return (
    <Route path="/admin" element={<DashboardLayout />}>
      <Route path="*" element={<NoMatch />} />
      <Route path="" element={<Calendar />} />
      <Route path="members" element={<Members />} />
    </Route>
  );
};

export default AdminRoutes;
