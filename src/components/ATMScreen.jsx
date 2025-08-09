import React from 'react';
import Button from './Button';

// ATM button configuration
const ATM_BUTTONS = [
  { id: 'withdraw', label: 'Withdraw', side: 'left', index: 0 },
  { id: 'deposit', label: 'Deposit', side: 'left', index: 1 },
  { id: 'balance', label: 'Balance', side: 'right', index: 0 },
  { id: 'transfer', label: 'Transfer', side: 'right', index: 1 },
];

export default function ATMScreen({ title = 'Welcome to the ATM' }) {
  const handleButtonClick = (buttonId) => {
    console.log(`${buttonId} button clicked`);
  };

  return (
    <div className="bg-[#72acce] flex flex-col justify-between p-4 border-4 border-gray-300 text-white font-mono w-60 h-50 relative">
      <div className="text-center font-bold text-lg">{title}</div>

      {ATM_BUTTONS.map((button) => (
        <Button
          key={button.id}
          side={button.side}
          index={button.index}
          label={button.label}
          onClick={() => handleButtonClick(button.id)}
        />
      ))}
    </div>
  );
}
