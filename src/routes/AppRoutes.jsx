import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RequireAuth from './RequireAuth';
import Layout from '@/components/organisms/Layout';
import Home from '@/views/Home';
import Auth from '@/views/Auth';
import Admin from '@/views/Admin';
import Dashboard from '@/views/User';
import Unauthorized from '@/views/Unauthorized';
import NoMatch from '@/views/NoMatch';
import DashboardLayout from '@/components/organisms/dashboard/Dashboard';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <>
            <Route element={<RequireAuth allowedRoles={['admin']} />}>
              <Route path="/admin" element={<DashboardLayout />}>
                <Route path="" element={<Admin />} />
              </Route>
            </Route>
          </>

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
