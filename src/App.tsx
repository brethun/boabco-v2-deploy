import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/layout.css';
import { SessionProvider } from './components/auth/SessionProvider';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginPage from './components/auth/LoginPage';
import AppLayout from './components/layout/AppLayout';
import PeopleTab from './features/people/components/PeopleTab';
import PeopleBBY from './features/people-bby/components/PeopleBBY';
import Business from './features/business/components/Business';
import Campaigns from './features/campaigns/components/Campaigns';
import Referrals from './features/referrals/components/Referrals';
import ServiceProviders from './features/service-providers/components/ServiceProviders';
import Jobs from './features/jobs/components/Jobs';
import Training from './features/training/components/Training';
import { Analytics } from './features/analytics';

const App: React.FC = () => {
  return (
    <SessionProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="people" replace />} />
            <Route path="people" element={<PeopleTab />} />
            <Route path="people-bby" element={<PeopleBBY />} />
            <Route path="business" element={<Business />} />
            <Route path="campaigns" element={<Campaigns />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="service-providers" element={<ServiceProviders />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="training" element={<Training />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/people" replace />} />
      </Routes>
    </SessionProvider>
  );
};

export default App;
