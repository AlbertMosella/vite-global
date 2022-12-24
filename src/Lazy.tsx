import { ComponentType, lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

type LazyImport = {
  default: ComponentType<unknown>;
};

const modules = import.meta.glob<LazyImport>('@ns/**/*.tsx');

const Lazy = ({ name }: { name: string }) => {
  const fullKey = Object.keys(modules).find(k => k.toLowerCase().includes(name.toLowerCase()));

  const OtherComponent = lazy(
    fullKey ? modules[fullKey] : () => Promise.reject('COMPONENT NOT FOUND')
  );

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Lazy;
