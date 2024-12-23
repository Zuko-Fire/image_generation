import React from 'react';

import { Auth } from './common/auth/auth';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './common/config/react-query';
import { routes } from './common/config/routeConfig';
import { OpenModal } from './common/components/openModal';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <Auth>
    <QueryClientProvider client={queryClient}>
      <OpenModal />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </Auth>
  );
};

export default App;
