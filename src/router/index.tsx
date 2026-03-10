import { lazy, Suspense } from 'react';
import { createMemoryRouter } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Settings = lazy(() => import('@/pages/Settings'));
const Examples = lazy(() => import('@/pages/Examples'));
const UpdatePage = lazy(() => import('@/pages/Update'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const withSuspense = (Component: React.ElementType) => (
  <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
    <Component />
  </Suspense>
);

export const router = createMemoryRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: 'about',
        element: withSuspense(About),
      },
      {
        path: 'settings',
        element: withSuspense(Settings),
      },
      {
        path: 'examples',
        element: withSuspense(Examples),
      },
      {
        path: 'update',
        element: withSuspense(UpdatePage),
      },
      {
        path: '*',
        element: withSuspense(NotFound),
      },
    ],
  },
]);
