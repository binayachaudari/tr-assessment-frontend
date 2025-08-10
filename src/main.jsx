import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { PinProvider } from './provider/PinProvider';
import { router } from './routes/router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PinProvider>
      <RouterProvider router={router} />
    </PinProvider>
  </StrictMode>
);
