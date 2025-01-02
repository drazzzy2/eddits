import { lazy } from 'react';

// Helper function for consistent lazy loading with retry
export function lazyLoad(componentImport: () => Promise<any>) {
  return lazy(() => componentImport().catch(err => {
    console.error('Error loading component:', err);
    return Promise.reject(err);
  }));
}