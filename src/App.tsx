import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { appRoutes, getPage } from './routes';

/** Minimal fallback shown while a route chunk loads (or during prerender). */
function RouteFallback() {
  return (
    <div className="container" style={{ paddingBlock: '6rem' }} aria-busy="true">
      <span className="visually-hidden">Loading page…</span>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {appRoutes.map((route) => {
          const Page = getPage(route.key);
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<RouteFallback />}>
                  <Page />
                </Suspense>
              }
            />
          );
        })}

        {/* Anything not matched above renders the real 404 page. */}
        <Route
          path="*"
          element={
            <Suspense fallback={<RouteFallback />}>
              {(() => {
                const NotFound = getPage('notFound');
                return <NotFound />;
              })()}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
