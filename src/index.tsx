import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { SWRConfig } from 'swr';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { ErrorFallback } from './components/ErrorFallback';
import { fetcher } from './utils/fetcher';
import { Loading } from './components/Loading';


createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <Suspense fallback={<Loading />}>
      <React.StrictMode>
        <SWRConfig value={{ fetcher, suspense: true }}>
          <App />
        </SWRConfig>
      </React.StrictMode>
    </Suspense>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
