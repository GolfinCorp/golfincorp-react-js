import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RequireAuth from './RequireAuth';
import Layout from '@/components/organisms/Layout';
import Home from '@/views/Home';
import Auth from '@/views/Auth';
import Calendar from '@/views/Admin/Calendar';
import Members from '@/views/Admin/Members';
import Dashboard from '@/views/Dashboard';
import Unauthorized from '@/views/Unauthorized';
import NoMatch from '@/views/NoMatch';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="*" element={<NoMatch />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />

          <Route element={<RequireAuth allowedRoles={['admin']} />}>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/members" element={<Members />} />
          </Route>

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
