import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePin } from '../hooks/usePin';
import ATMScreen from '../components/ATMScreen';
import { ATM_BUTTONS } from '../constants/Buttons';

export default function ExitPage() {
  const navigate = useNavigate();
  const { logout } = usePin();

  useEffect(() => {
    const timer = setTimeout(() => {
      logout();
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,
    };
  }, []);

  const buttons = Object.values(buttonConfig);

  const title = (
    <span>
      Thank You! <br />
      Please take your card and receipt <br />
      Returning to main screen...
    </span>
  );

  return <ATMScreen title={title} buttons={buttons} />;
}
