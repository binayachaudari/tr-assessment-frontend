import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../components/ProtectedRoute';
import EnterPinPage from '../pages/EnterPinPage';
import MainPage from '../pages/MainPage';
import WelcomePage from '../pages/WelcomePage';
import BalancePage from '../pages/BalancePage';
import WithdrawPage from '../pages/WithdrawPage';
import DepositPage from '../pages/DepositPage';
import ExitPage from '../pages/ExitPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Public routes
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: '/enter-pin',
        element: <EnterPinPage />,
      },
      // Protected routes - all children require PIN authentication
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/main',
            element: <MainPage />,
          },
          {
            path: '/balance',
            element: <BalancePage />,
          },
          {
            path: '/withdraw',
            element: <WithdrawPage />,
          },
          {
            path: '/deposit',
            element: <DepositPage />,
          },
          {
            path: '/exit',
            element: <ExitPage />,
          },
        ],
      },
    ],
  },
]);
