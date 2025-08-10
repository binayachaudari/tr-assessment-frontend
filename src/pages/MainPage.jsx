import { useMemo } from 'react';
import ATMScreen from '../components/ATMScreen';
import { ATM_BUTTONS } from '../constants/Buttons';

export default function MainPage() {
  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,
      LEFT_3: {
        ...ATM_BUTTONS.LEFT_3,
        label: 'Withdraw',
        onClick: () => {},
      },
      LEFT_4: {
        ...ATM_BUTTONS.LEFT_4,
        label: 'Deposit',
        onClick: () => {},
      },
      RIGHT_2: {
        ...ATM_BUTTONS.RIGHT_2,
        label: 'Exit',
        onClick: () => {},
      },
      RIGHT_3: {
        ...ATM_BUTTONS.RIGHT_3,
        label: 'Balance',
        onClick: () => {},
      },
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: 'Re-Enter PIN',
        onClick: () => {},
      },
    };
  }, []);

  const buttons = Object.values(buttonConfig);

  const title = (
    <span>
      Hi Peter Parker! <br />
      Please make a choice...
    </span>
  );

  return <ATMScreen title={title} buttons={buttons} />;
}
