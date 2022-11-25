import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RequireAuth from './RequireAuth';
import Layout from '@/components/organisms/Layout';
import Home from '@/views/Home';
import Auth from '@/views/Auth';
import Dashboard from '@/views/User';
import Unauthorized from '@/views/Unauthorized';
import NoMatch from '@/views/NoMatch';
import Calendar from '@/views/Admin/Calendar';
import DashboardLayout from '@/components/organisms/dashboard/Dashboard';
import Members from '@/views/Admin/Members';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />

          {/* ADMIN ROUTES */}
          <Route element={<RequireAuth allowedRoles={['admin']} />}>
            <Route path="/admin" element={<DashboardLayout />}>
              <Route path="*" element={<NoMatch />} />
              <Route path="" element={<Calendar />} />
              <Route path="members" element={<Members />} />
            </Route>
          </Route>

          {/* USER ROUTES */}
          <Route element={<RequireAuth allowedRoles={['member']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
