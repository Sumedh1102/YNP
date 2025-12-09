import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Academics from './Pages/Academics.jsx';
import DPharmSyllabus from './Academics/DPharmSyllabus.jsx';
import BPharmSyllabus from './Academics/BPharmSyllabus.jsx';
import Scholarship from './Academics/Scholarship.jsx';
import Facilities from './Pages/Facilities.jsx';
import Studentlife from './Pages/Studentlife.jsx';
import Contact from './Pages/Contact.jsx';
import YnpTeam from './Pages/YNPteams.jsx';
import BoardOfTrustees from './YNP Teams/BoardOfTrustees.jsx';
import GoverningBoard from './YNP Teams/GoverningBoard.jsx';
import StatutoryBodies from './YNP Teams/StatutoryBodies.jsx';
import ChairmanMessage from './YNP Teams/ChairmanMessage.jsx';
import PrincipalMessage from './YNP Teams/PrincipalMessage.jsx';
import TeachingStaff from './YNP Teams/TeachingStaff.jsx';
import NonTeachingStaff from './YNP Teams/NonTeachingStaff.jsx';
import FRAFees from './Components/FRAFees.jsx';
import Faculty from './Pages/BpharmF.jsx';
import Dpharm from './Pages/Dpharm.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Added Helmet Provider


// ✅ ScrollToTop must be used inside a route layout
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

// ✅ Layout wrapper including ScrollToTop + App (main layout)
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <App />
    </>
  );
}

// ✅ Define all routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },

      {
        path: '/ynp-team',
        element: <YnpTeam />,
        children: [
          { path: 'board-of-trustees', element: <BoardOfTrustees /> },
          { path: 'governing-board', element: <GoverningBoard /> },
          { path: 'statutory-bodies', element: <StatutoryBodies /> },
          { path: 'chairman-message', element: <ChairmanMessage /> },
          { path: 'principal-message', element: <PrincipalMessage /> },
          { path: 'teaching-staff', element: <TeachingStaff /> },
          { path: 'non-teaching-staff', element: <NonTeachingStaff /> },
        ],
      },

      { path: '/facilities', element: <Facilities /> },
      { path: '/studentlife', element: <Studentlife /> },
      { path: '/bpharm-faculty', element: <Faculty /> },
      { path: '/dpharm-faculty', element: <Dpharm /> },
      { path: '/frafees', element: <FRAFees /> },
      { path: '/contact', element: <Contact /> },

      {
        path: '/academics',
        element: <Academics />,
        children: [
          { path: 'dpharm-syllabus', element: <DPharmSyllabus /> },
          { path: 'bpharm-syllabus', element: <BPharmSyllabus /> },
          { path: 'scholarship', element: <Scholarship /> },
        ],
      },
    ],
  },
]);

// ✅ Render App inside HelmetProvider (so all pages can use Helmet)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
