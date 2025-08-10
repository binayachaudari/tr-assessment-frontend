import { useMemo } from 'react';
import ATMScreen from '../components/ATMScreen';
import { ATM_BUTTONS } from '../constants/Buttons';

export default function WithdrawPage() {
  const buttonConfig = useMemo(() => {
    return {
      ...ATM_BUTTONS,

      LEFT_4: {
        ...ATM_BUTTONS.LEFT_4,
        label: 'Back',
        onClick: () => {},
      },
      RIGHT_4: {
        ...ATM_BUTTONS.RIGHT_4,
        label: 'Confirm',
        onClick: () => {},
      },
    };
  }, []);

  const buttons = Object.values(buttonConfig);

  const title = (
    <span>
      Hi Peter Parker! <br />
      Please Enter the amount you want to withdraw <br />
      $0.00
    </span>
  );

  return <ATMScreen title={title} buttons={buttons} />;
}
