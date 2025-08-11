import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import GuestRoutes from '../components/GuestRoutes'
import ProtectedRoute from '../components/ProtectedRoute'
import BalancePage from '../pages/BalancePage'
import DepositPage from '../pages/DepositPage'
import EnterPinPage from '../pages/EnterPinPage'
import ExitPage from '../pages/ExitPage'
import MainPage from '../pages/MainPage'
import WelcomePage from '../pages/WelcomePage'
import WithdrawPage from '../pages/WithdrawPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/enter-pin',
        element: <EnterPinPage />,
      },
      // routes
      {
        path: '/',
        element: <GuestRoutes />,
        children: [
          {
            path: '/',
            element: <WelcomePage />,
          },
        ],
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
])
